import { cn } from "../utils";

function Button({ children, className, ...rest }) {
  return (
    <button
      className={cn(
        "flex items-center bg-[#2e2552] transition hover:bg-[#372955] text-white text-lg font-extrabold px-10 py-3 rounded-2xl",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
