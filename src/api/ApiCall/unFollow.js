import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const unFollow = async ({followerId, userId }) => {

  try {
    const { data } = await axios({
      method: 'PUT',
      url: ApiConfigs.unFollow,
      params: {
        followerId: userId
      },
      data: {
        userId: followerId

      }
    });
    //console.log(data)
    return data;
  } catch (error) {
    
  }
};