import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const recentlyListedNft = async () => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.recentlyListedNft, 

    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};