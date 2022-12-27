import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { publicProvider } from 'wagmi/providers/public';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';
import { ThemeProvider,createMuiTheme } from '@mui/material';
import '@rainbow-me/rainbowkit/styles.css';
import {
  connectorsForWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura'
// import { publicProvider } from 'wagmi/providers/public';
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  trustWallet,
  braveWallet,
  omniWallet
} from '@rainbow-me/rainbowkit/wallets';
import { UserProvider } from './context/User/UserContext';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'


const bscTest = {
  id:97,
  name: 'BSC Testnet',
  network: 'Binance Smart Chain Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'tBNB',
    symbol: 'tBNB',
  },
  iconUrl:'',
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s3.binance.org:8545',
    
  },
  blockExplorers: {
    default: {name:'BscScan TestNet',url:'https://testnet.bscscan.com'},
  },
  testnet: true,
}
const { chains,provider,webSocketProvider } = configureChains(
  [chain.mainnet, bscTest],
  [
  publicProvider(),
  jsonRpcProvider({
    priority:0,
    rpc: (chain) => {
      if (chain.id !== bscTest.id) return { http: chain.rpcUrls.default }
      return { http: chain.rpcUrls.default }
    },
  }),
  ]
);
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains ,shimDisconnect:true}),
      trustWallet({chains}),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      coinbaseWallet({ chains }),
      omniWallet({chains}),
      braveWallet({chains,shimDisconnect:true})
    ],
  },
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
})

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createMuiTheme({
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    // values: {
    //   xs: 0,
    //   sm: 450,
    //   md: 600,
    //   lg: 900,
    //   xl: 1200
    // }
  }
});
root.render(
  
  <React.StrictMode>
  <UserProvider>
   <WagmiConfig client={wagmiClient}>
   <RainbowKitProvider chains={chains} modalSize='compact' >
   <QueryClientProvider client={queryClient}>
   <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
       <ToastContainer />
   </QueryClientProvider>
    </RainbowKitProvider>
    </WagmiConfig>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
