import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const updateNftNameOrDescription = async ({token,nftCollectionId,value}) => {
    try {
      const { data } = await axios({
        method:'PUT',
        url:ApiConfigs.updateNftNameOrDescription, 
        headers:{
          'authorization':`Bearer ${token}`,
        },
        params:{
          id:nftCollectionId
        },
        data:value
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};