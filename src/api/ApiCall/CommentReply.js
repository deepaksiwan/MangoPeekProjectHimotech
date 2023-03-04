import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const CommentReply = async ({ nftId,commentId, text, userId }) => {
   console.log("sdjnsjnds",text,userId)

   try {
      const { data } = await axios({
         method: 'PUT',
         url: ApiConfigs.ReplyNftComments,
         params: {
            nftId: nftId,
         },
         data: {
            commentId: commentId,
            text: text,
            userId: userId

         }
      });

      return data;
   } catch (error) {
      console.log(error, "hk");
   }
};