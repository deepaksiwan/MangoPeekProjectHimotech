import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const viewWallet= async () => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.viewWallet, 
        headers:{
          'authorization':`Bearer ${localStorage?.getItem("token")}`,
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};