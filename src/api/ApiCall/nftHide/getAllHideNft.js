import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getAllHideNft = async (token) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getAllHideNft, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};