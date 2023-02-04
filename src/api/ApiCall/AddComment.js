import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const AddComment = async ({token,text, userId}) => {
  //console.log("text",text)
    try {
      const {data} = await axios({
        method:'POST',
        url:ApiConfigs.AddComment, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        data:{
          comment:{
            text: text,
            userId:userId
          }
        }
    });
  
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};