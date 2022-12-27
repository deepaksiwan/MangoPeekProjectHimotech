import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const getProfileByUserName = async (userName) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getProfileByUserName,
        params:{
          userName:userName
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};