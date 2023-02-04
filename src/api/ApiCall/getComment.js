import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const getComment = async () => {
   try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getComment, 

    });
    return data;
   
    } catch (error) {
      console.log(error,"hk");
    }
};