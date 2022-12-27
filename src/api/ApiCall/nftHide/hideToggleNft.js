import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const hideToggleNft = async ({token,nftCollectionId}) => {
    try {
      const { data } = await axios({
        method:'PUT',
        url:ApiConfigs.hideToggleNft, 
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