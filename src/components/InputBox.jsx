function InputBox({ name, label, value, onChange, ...rest }) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-lg text-gray-200 font-semibold uppercase"
      >
        {label}
      </label>
      <div className="bg-[#364256] rounded-xl overflow-hidden">
        <input
          id={name}
          value={value}
          onChange={onChange}
          className="bg-transparent focus:outline-none w-full md:text-xl font-extrabold text-gray-200 self-start py-4 px-3 md:px-5 shadow-xl"
          {...rest}
        />
      </div>
    </div>
  );
}

export default InputBox;
