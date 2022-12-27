import axios from "axios";
import ApiConfigs from "../../ApiConfig";

export const getNftCollectionByChainNameAndUserName = async (page,chainName,userName) => {
    try {
      const { data } = await axios({
        method:'GET',
        url:ApiConfigs.getNftCollectionByChainNameAndUserName, 
        params:{
            page:page,
            chainName:chainName,
            userName:userName
        }
    });
    return data;
    } catch (error) {
      console.log(error,"hk");
    }
};