import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';  
import { configureChains,createClient,sepolia,WagmiConfig} from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { color } from 'framer-motion';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, sepolia],
  [
    alchemyProvider({ apiKey: `${process.env.ALCHEMY_ID}` }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function App({ Component, pageProps }: AppProps) {
  
  return (
 <WagmiConfig client={wagmiClient}>
 <RainbowKitProvider  theme={darkTheme({
       accentColor: "#1a2031",
       accentColorForeground: "#e4e6f1",
    }
    )}chains={chains}>
  <ChakraProvider>
  <Component {...pageProps} />
</ChakraProvider>
 </RainbowKitProvider>
</WagmiConfig>
)
}
