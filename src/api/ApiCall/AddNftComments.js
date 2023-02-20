import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const AddNftComments = async ({nftId,text, userId}) => {
  //console.log("sdjnsjnds",text,userId)
  
    try {
      const {data} = await axios({
        method:'PUT',
        url:ApiConfigs.AddNftComments, 
        params:{
          nftId:nftId
        },
        data:{
          comment:[{
            text: text,
            userId:userId
          }]
        }
    });
  
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};