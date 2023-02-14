import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const getNftComments = async (getNftId) => {
   try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getNftComments, 
        params: {
          getNftId: getNftId
        },

    });
    console.log("data", data)
    return data;
    
    } catch (error) {
      console.log(error,"hk");
    }
};