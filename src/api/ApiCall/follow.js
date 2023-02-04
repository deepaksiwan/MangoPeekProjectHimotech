import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const follow = async ({followerId, userId }) => {

  try {
    const { data } = await axios({
      method: 'PUT',
      url: ApiConfigs.follow,
      
      params: {
        followerId: userId
      },
      data: {
        userId: followerId

      }
    });
    console.log("dbsfnsdjm", data)
    return data;
  } catch (error) {
    console.error(error, "hksdfdsfs");
  }
};