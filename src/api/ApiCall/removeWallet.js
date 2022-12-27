import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const removeWallet = async ({token,walletId}) => {
    try {
      const { data } = await axios({
        method:'DELETE',
        url:ApiConfigs.removeWallet, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        params:{
            id:walletId
        }
    });
    // console.log(data);
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};