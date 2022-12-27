import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const mostViewNft = async () => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.mostViewNft, 

    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};