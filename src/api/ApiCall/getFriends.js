import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const getFriends = async (userId) => {
   try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.Getfriends, 
        params: {
         userId: userId
        },

    });
    console.log("dataserews", data)
    return data;
    
    } catch (error) {
      console.log(error,"hk");
    }
};