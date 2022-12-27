import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const reset = async ({newPassword, confirmPassword ,id,token}) => {
    try {
      const { data } = await axios({
        method:'POST',
        url:ApiConfigs.reset, 
        params:{
            id:id,
            token:token
        },
        data:{ 
        newPassword:newPassword, 
        confirmPassword:confirmPassword
        }
    });
    // console.log(data);
    return data;
    } catch (error) {
    }
  };

