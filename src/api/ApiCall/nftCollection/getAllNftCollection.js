import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getAllNftCollection = async (page) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getAllNftCollection, 
        params:{
          page:page,
          limit:100
        }

    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};