import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const pinnedToggleNft = async ({token,nftCollectionId}) => {
  // console.log(nftCollectionId,token);
    try {
      const { data } = await axios({
        method:'PUT',
        url:ApiConfigs.pinnedToggleNft, 
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