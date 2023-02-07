import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const login = async ({email, password }) => {
    try {
      const { data } = await axios({
        method:'POST',
        url:ApiConfigs.login, 
        data:{ 
        // userName: userName,  
        email:email,
        password:password,
      
         }
    });

    console.log(data)
    return data;
    
    } catch (error) {
    
    }
  };

