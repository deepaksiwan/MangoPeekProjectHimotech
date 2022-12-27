export const initialState = {
    token: "",
    userData:{},
    userUpdateData:{},
    updatePic:"",
    wallets:[{
      _id:"",
      networkName:"",
      address:""
    }]
  };
  
  export const actionTypes = {
    SET_TOKEN: "SET_TOKEN",
    SET_USER:"SET_USER",
    UPDATE_USER:"UPDATE_USER",
    UPDATE_PROFILE_PIC:"UPDATE_PROFILE_PIC",
    SET_WALLET:"SET_WALLET"
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_TOKEN:
        return { ...state, token: action.value };
      case actionTypes.SET_USER:
        return {...state,userData:action.value};
      case actionTypes.UPDATE_USER:
        return{...state,userUpdateData:action.value}
      case actionTypes.UPDATE_PROFILE_PIC:
        return{...state,updatePic:action.value}  
      case actionTypes.SET_WALLET:
        return{...state,wallets:action.value}
      default:
        return state;
    }
  };
  
  export default reducer;