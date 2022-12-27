import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const updateProfilePic = async ({token,value}) => {
    try {
      const { data } = await axios({
        method:'PUT',
        url:ApiConfigs.updateProfilePic, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        data:{profilePic:value}
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};