import axios from "axios";
import ApiConfigs from "../ApiConfig";

export const forget = async ({email}) => {
    try {
      const { data } = await axios({
        method:'POST',
        url:ApiConfigs.forget, 
        data:{ 
            email:email, 

        }
    });
    // console.log(data);
    return data;
    } catch (error) {
    }
  };

