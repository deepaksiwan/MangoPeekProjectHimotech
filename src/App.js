import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/Home/Home";
// import Profile from "./pages/Profile/Profile";
import "bootstrap-icons/font/bootstrap-icons.css";
// import HiddenNFT from "./components/HiddenNFT/HiddenNFT";
// import Explore from "./pages/Explore/Explore";
import NFTpage from "./pages/NFTpage/NFTpage";
// import Wallet from "./pages/Wallet/Wallet";
// import Reset from "./pages/Register/Reset";
import Signup from "./pages/Register/Signup";
import Login from "./pages/Register/Login";
// import Forget from "./pages/Register/Forget";
// import BizarroWorld from "./pages/BizarroWorld/BizarroWorld";
// import Rabbithole from "./pages/Rabbithole/Rabbithole";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/User/UserContext";
import { actionTypes } from "./context/User/UserReducer";
import { viewProfile } from "./api/ApiCall/viewProfile";
import { useQuery } from "react-query";
 import AuthGuard from "./protectedRoutes/AuthGaurd";
 import UserGuard from "./protectedRoutes/UserGuard"
// import { toast } from "react-toastify";
import Profile from './pages/profile/Profile'
import Create from './pages/create/Create'
import NFTDetails from './pages/NFTInfo/NFTDetails'
import NotLinkWallet from './pages/NotLinkWallet/NotLinkWallet'
import Explorewithoutmenu from './pages/Explorepagewithsidemenu/Explorewithoutmenu'
import Explorewithmenu from './pages/Explorepagewithsidemenu/Explorewithmenu'
import Messaging from './pages/Messaging/Messaging'
import MessagingExpend from './pages/MessagingExpend/MessagingExpend'
import Notification from './pages/Notification/Notification'


function App() {
  const [{ token }, dispatch] = useContext(UserContext);
  const tokens = token ? token : localStorage.getItem("token");
  const { refetch } = useQuery(
    ["viewProfile", tokens],
    () => viewProfile(tokens), {
    onSuccess: (data) => {
      dispatch({ type: actionTypes.SET_USER, value: data?.data });
    },
  });

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    if (jwtToken) {
      dispatch({ type: actionTypes.SET_TOKEN, value: jwtToken });
      refetch?.()
    }
  }, [dispatch, token]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nftpage/:id" element={<NFTpage />} />
          <Route exact path="/register" name="Signup Page" element={<Signup />}/>
          <Route exact path="/login" name="Login Page" element={<UserGuard><Login /></UserGuard>} />
          <Route exact path="/profile/:id" element={<Profile />}></Route>
          {/* <Route exact path="/create" element={<Create />}></Route> */}
          <Route exact path="/nftDetails/:id" element={<AuthGuard><NFTDetails /></AuthGuard>}></Route>
          <Route exact path="/not_link_wallet" element={<AuthGuard><NotLinkWallet /></AuthGuard>}></Route>
          <Route exact path="/explorepage_without_side_menu" element={<AuthGuard><Explorewithoutmenu /></AuthGuard>}></Route>
          <Route exact path="/:userName" element={<AuthGuard><Explorewithmenu /></AuthGuard>}></Route>
          {/* <Route exact path="/explorepage_with_side_menu" element={<AuthGuard><Explorewithmenu /></AuthGuard>}></Route> */}
          <Route exact path="/messaging" element={<AuthGuard><Messaging /></AuthGuard>}></Route>
          <Route exact path="/messagingexpend" element={<MessagingExpend />}></Route>
          {/* <Route exact path="/notification" element={<AuthGuard><Notification /></AuthGuard>}></Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
