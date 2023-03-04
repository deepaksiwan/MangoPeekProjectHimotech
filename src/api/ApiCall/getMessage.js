import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const getMessage = async (conversationId) => {
   try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getMessage, 
        params: {
         conversationId: conversationId
        },

    });
    console.log("dataserews", data)
    return data;
    
    } catch (error) {
      console.log(error,"hk");
    }
};