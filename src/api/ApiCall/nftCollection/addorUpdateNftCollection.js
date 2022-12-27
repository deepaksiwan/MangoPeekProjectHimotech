import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const addorUpdateNftCollection = async ({token,value}) => {
    try {
      const { data } = await axios({
        method:'POST',
        url:ApiConfigs.addorUpdateNftCollection, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        data:value
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};