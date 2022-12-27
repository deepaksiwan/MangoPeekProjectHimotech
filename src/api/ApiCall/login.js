import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const login = async ({ email, password }) => {
    try {
      const { data } = await axios({
        method:'POST',
        url:ApiConfigs.login, 
        data:{ 
        email:email, 
        password:password
         }
    });
    return data;
    } catch (error) {
    
    }
  };

