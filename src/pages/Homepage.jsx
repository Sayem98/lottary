import Header from "../components/Header";
import SwapCard from "../components/SwapCard";

function Homepage() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="flex justify-center flex-col items-center mt-4 gap-4">
        <p className="text-5xl">Get you tickets now !</p>
        <p>
          <span className="text-3xl">4</span>h{" "}
          <span className="text-3xl">20</span>m{" "}
          <span className="text-3xl">69</span>s
        </p>
      </div>

      <SwapCard />
    </div>
  );
}

export default Homepage;
