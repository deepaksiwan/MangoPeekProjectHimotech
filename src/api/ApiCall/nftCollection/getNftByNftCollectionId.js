import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getNftByNftCollectionId = async (nftCollectionId) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getNftByNftCollectionId, 
        params:{
          id:nftCollectionId
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};