import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const viewProfile = async (token) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.viewProfile, 
        headers:{
          'authorization':`Bearer ${token}`,
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};