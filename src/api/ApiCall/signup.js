import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const signup = async ({ email,userName, password }) => {
    try {
      const { data } = await axios({
        method:'POST',
        url:ApiConfigs.signup, 
        data:{ 
        email:email, 
        userName:userName,
        password:password
        }
    });
    // console.log(data);
    return data;
    } catch (error) {
    }
  };

