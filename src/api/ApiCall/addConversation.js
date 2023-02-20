import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const addConversation = async ({ senderId, receiverId }) => {
   // console.log("abndassaman", receiverId)
   // console.log("shbds", senderId)
   try {
      const { data } = await axios({
         method: 'POST',
         url: ApiConfigs.AddConversation,
         // data:
         // {
         //    members:
         //       [{
         //          senderId: senderId,
         //          receiverId: receiverId
         //       }]
         // }
         data: {
            senderId: senderId,
            receiverId: receiverId
         }
      });

      
      return data;
   } catch (error) {
      console.log(error, "hk");
   }
};