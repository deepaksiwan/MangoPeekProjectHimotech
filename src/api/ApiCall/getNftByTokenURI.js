import axios from "axios";

export const getUserNFTByTokenURI = async (tokenURI) => {
  const tokenUri=tokenURI.replace("ipfs://","https://wizard.infura-ipfs.io/ipfs/")
    try {
      const { data } = await axios({
        method:'GET',
        url:tokenUri, 
        headers:{
          origin:"https://d2ubgtumno6dlw.cloudfront.net/",
          "content-type": "image/png"
        }
    });
    // var reader=new FileReader();
    // reader.onloadend=function(){
    //   // callback(data);
  // }
  // let blob = new Blob(
    // [data]
  // )
  // let image = URL.createObjectURL(blob)
  return data
    // return data;
    // return data;
    } catch (error) {
      // console.log(error,"hk");
    }
};
