import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getAllPinnedNftByUserName = async (userName) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getAllPinnedNftByUserName, 
        params:{
          userName:userName
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};