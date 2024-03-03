import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { bsc, polygon, sepolia } from "wagmi/chains";
import { Toaster } from "react-hot-toast";
import Homepage from "./pages/Homepage";

const chains = [polygon];
const config = createConfig(
  getDefaultConfig({
    alchemyId: "EbWpcrEoNB5gzeDJi_clFzLbpbgTtuRt",
    walletConnectProjectId: "1134b8f033ffc7945c3513d4fa5f0459",
    chains,
    appName: "Your App Name",
    appDescription: "Your App Description",
    appUrl: "https://family.co",
    appIcon: "https://family.co/logo.png",
  })
);

function App() {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <Homepage />
        <Toaster position="top-center" reverseOrder={false} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
