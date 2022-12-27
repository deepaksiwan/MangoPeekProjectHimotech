import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getMyNftCollection = async (page,token) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getMyNftCollection, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        params:{
          page:page
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};