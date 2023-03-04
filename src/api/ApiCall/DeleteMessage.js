import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const DeleteMessage = async ({conversationId}) => {
   console.log("conversationId", conversationId)
    try {
      const { data } = await axios({
        method:'DELETE',
        url:ApiConfigs.DeleteMessage, 
      //   headers:{
      //     'authorization':`Bearer ${token}`,
      //   },
        params:{
         conversationId:conversationId
        }
    });
    console.log("data", data)
    
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};