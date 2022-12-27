import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const addWallet = async ({token,networkName,address}) => {
    try {
      const { data } = await axios({
        method:'POST',
        url:ApiConfigs.addWallet, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        data:{
          networkName:networkName,
          address:address
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};