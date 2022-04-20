import React, { Suspense,useState, useEffect } from 'react';
import { Spiner } from './component/Spiner';
import MainRoutes from './routes/MainRoutes';
import { ToastContainer, toast } from 'react-toastify';
import {Web3Provider} from './web3/contexts/web3Context'
import {
  loadWeb3,
  loadBlockChainData,
  listenAccountChange,
  listenNetworkChange,
} from './web3/functions/web3'
import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(false)

  const [networkDetails, setNetworkDetails] = useState({
    address: '',
    web3: '',
    connected: '',
    connectTag: '',
    chainData: '',
    wallet: '',
    chainId: '',
    networkId: '',
    balance: '',
  })
  const resetApp = async () => {
    setNetworkDetails({
      address: '',
      web3: '',
      connected: false,
      connectTag: '',
      chainData: '',
      wallet: '',
      chainId: '',
      networkId: '',
      balance: '',
    })
    const web3 = window.web3
    // localStorage.clear();
    //close -> disconnect
    if (
      web3 &&
      web3.currentProvider &&
      web3.currentProvider.disconnect
    ) {
      await web3.currentProvider.disconnect()
    }
  }

  const handleConnect = async () => {
    const metaMaskInstalled = typeof window.web3 !== 'undefined'
    if (metaMaskInstalled) {
      setLoading(true)
      await loadWeb3(setLoading)
      await loadBlockChainData(
        setNetworkDetails,
        networkDetails,
        setLoading,
      )
      await listenAccountChange(
        setNetworkDetails,
        networkDetails,
        setLoading,
        resetApp,
      )
      await listenNetworkChange(
        setNetworkDetails,
        networkDetails,
        setLoading,
        resetApp,
      )
    } else {
      toast.info(
        'Metamask Extension Not Found ! Please Install Metamask to Connect',
      )
    }
  }

  useEffect(() => {
    if(localStorage.wallet_name == 'metamask') {
      handleConnect()
    }
  }, [])

  return (<>
    <Web3Provider
      value={{
        loadWeb3,
        loading,
        setLoading,
        networkDetails,
        setNetworkDetails,
        loadBlockChainData,
        listenAccountChange,
        listenNetworkChange,
        handleConnect,
        resetApp,
      }}
    >
    <Suspense fallback={<Spiner />}>
      <MainRoutes />
    </Suspense>
    <ToastContainer theme="colored" />
    </Web3Provider>
  </>);
}

export default App;
