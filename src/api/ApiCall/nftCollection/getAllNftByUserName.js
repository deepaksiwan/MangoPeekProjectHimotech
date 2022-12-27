import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getAllNftByUserName = async (userName) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getAllNftByUserName, 
        params:{
          userName:userName
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};