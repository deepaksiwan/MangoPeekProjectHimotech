import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const getFollowigUsers = async (userId) => {
   try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getFollowigUsers, 
        params: {
         userId: userId
        },

    });
    return data;
    
    } catch (error) {
      console.log(error,"hk");
    }
};