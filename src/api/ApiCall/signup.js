import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const signup = async ({ firstName,lastName,userName,email,password, conformPassword }) => {
    try {
      console.log(firstName);
      const { data } = await axios({
        method:'POST',
        url:ApiConfigs.signup, 
        data:{ 
        firstName:firstName,  
        lastName:lastName,
        userName:userName,
        email:email, 
        password:password,
        conformPassword
        }
    });
     
    return data;
    } catch (error) {
      console.log(error)
    }
  };

