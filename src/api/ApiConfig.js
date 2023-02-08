  //const url = "http://localhost:8900";
 const url = "https://d38fct4fjh0hub.cloudfront.net"



const ApiConfigs = {
  //chatting start ......
  getConversation: `${url}/api/v1/chat/getConversation`,
  getMessage: `${url}/api/v1/chat/getMessage`,
  AddMessage: `${url}/api/v1/chat/AddMessage`,
  Getfriends: `${url}/api/v1/chat/getFriends`,
  getUser: `${url}/api/v1/chat/getUser`,
  AddComment: `${url}/api/v1/chat/Comments`,
  getComment: `${url}/api/v1/chat/getcomments`,
  AddConversation: `${url}/api/v1/chat/AddConversation`,
  follow: `${url}/api/v1/chat/follow`,
  unFollow: `${url}/api/v1/chat/unFollow`,
 // ......chating end
 
  login: `${url}/api/v1/profile/login`,
  signup: `${url}/api/v1/profile/signup`,
  viewProfile: `${url}/api/v1/profile/viewProfile`,
  getProfileByUserName:`${url}/api/v1/profile/getProfileByUserName`,
  editProfile: `${url}/api/v1/profile/editProfile`,
  viewWallet: `${url}/api/v1/userWallet/view`,
  addWallet:`${url}/api/v1/userWallet/add`,
  removeWallet:`${url}/api/v1/userWallet/remove/`,
  addorUpdateNftCollection:`${url}/api/v1/nftCollection/addorUpdate`,
  updateNftNameOrDescription:`${url}/api/v1/nftCollection/updateNftNameOrDescription`,
  getAllNftCollection:`${url}/api/v1/nftCollection/getAllNft`,
  getAllNftByChainName:`${url}/api/v1/nftCollection/getAllNftByChainName`,
  getMyNftCollection:`${url}/api/v1/nftCollection/getMyNft`,
  getNftCollectionByChainNameAndUserName:`${url}/api/v1/nftCollection/getNftCollectionByChainNameAndUserName`,
  getNftByNftCollectionId:`${url}/api/v1/nftCollection/getNftByNftCollectionId`,
  getAllNftByUserName:`${url}/api/v1/nftCollection/getAllNftByUserName`,
  toggleLike:`${url}/api/v1/nftCollection/toggleLike`,

  // forget:`${url}/api/v1/profile/forget`,
  // reset:`${url}/api/v1/profile/reset`,
  // updateProfilePic:`${url}/api/v1/profile/updateProfilePic`,
  // hideToggleNft:`${url}/api/v1/nftCollection/hideToggleNft`,
  // getAllHideNft:`${url}/api/v1/nftCollection/getAllHideNft`,
  // pinnedToggleNft:`${url}/api/v1/nftCollection/pinnedToggleNft`,
  // getAllPinnedNftByUserName:`${url}/api/v1/nftCollection/getAllPinnedNftByUserName`,
  //mostLikeNft:`${url}/api/v1/nftCollection/mostLikeNft`,
  // mostViewNft:`${url}/api/v1/nftCollection/mostViewNft`,
  //recentlyListedNft:`${url}/api/v1/nftCollection/recentlyListedNft`,
  // getUserNFT:`https://deep-index.moralis.io/api/v2/`
};

export default ApiConfigs;