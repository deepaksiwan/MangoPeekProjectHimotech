import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const mostLikeNft = async () => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.mostLikeNft, 

    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};