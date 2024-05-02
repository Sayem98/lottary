import { ConnectKitButton } from "connectkit";

function Header() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between bg-[#27262c] px-6 md:px-12 py-4 shadow-md">
        <div
          className="flex gap-5 justify-center items-center"
          onClick={() => {
            window.open("https://lottery.purplewavestudios.com/");
          }}
        >
          <img
            src="./images/tokens/woke.jpg"
            alt="USDT"
            className="object-contain w-14 h-14 rounded-full"
          />
          <h4 className="text-lg font-bold uppercase">Lottery</h4>
        </div>
        <div className="flex items-center gap-4">
          <ConnectKitButton.Custom>
            {({ isConnected, show, address }) => {
              return (
                <button
                  onClick={show}
                  className={
                    isConnected &&
                    "bg-[#4f46e5] hover:bg-[#5b54e8] text-white font-bold px-4 py-3 rounded-lg shadow-xl"
                  }
                >
                  {isConnected ? (
                    address.slice(0, 6) + "..." + address.slice(-4)
                  ) : (
                    <button className="bg-[#4f46e5] hover:bg-[#5b54e8] font-bold px-4 md:px-6 py-2 rounded-lg shadow-xl">
                      Connect Wallet
                    </button>
                  )}
                </button>
              );
            }}
          </ConnectKitButton.Custom>
        </div>
      </div>
    </header>
  );
}

export default Header;
