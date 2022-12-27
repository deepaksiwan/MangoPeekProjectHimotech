import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const toggleLike = async ({token,nftCollectionId}) => {
    try {
      const { data } = await axios({
        method:'PUT',
        url:ApiConfigs.toggleLike, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        params:{
            id:nftCollectionId
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};