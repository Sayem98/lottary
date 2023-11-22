import { ClipLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="flex items-center justify-center gap-2">
      <ClipLoader size={25} color="rgb(137, 155, 173)" />
      <span className="text-sm text-gray-300 lowercase">processing...</span>
    </div>
  );
}

export default Spinner;
