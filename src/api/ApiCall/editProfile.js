import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const editProfile = async ({token,value}) => {
    try {
      const { data } = await axios({
        method:'PUT',
        url:ApiConfigs.editProfile, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        data:value
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};