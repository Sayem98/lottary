function Footer() {
  return (
    <header className="w-full">
      <div className="flex items-center gap-4 justify-center flex-row bg-[#27262c] p-4">
        <button
          onClick={() => {
            window.open(
              "https://polygonscan.com/address/0x680945ebc86318f429a988e26ba22e038b145355#code"
            );
          }}
        >
          {/* Polyscan */}
          <img
            src="./images/chains/polygon.png"
            alt="PolyScan"
            className="w-10 h-10"
          />
        </button>
        <button
          onClick={() => {
            window.open("https://discord.com/invite/z4Dc27KT3x");
          }}
        >
          {/* Polyscan */}
          <img
            src="./images/chains/discord.png"
            alt="PolyScan"
            className="w-10 h-10 rounded-full"
          />
        </button>
        <button
          // onclick open a link
          onClick={() => {
            window.open(
              "https://x.com/wokecoin2024?t=7X1McvMEsxHhG0MgTZvITA&s=09"
            );
          }}
        >
          {/* Polyscan */}
          <img
            src="./images/chains/twitter.png"
            alt="PolyScan"
            className="w-10 h-10 rounded-full"
          />
        </button>
      </div>
    </header>
  );
}

export default Footer;
