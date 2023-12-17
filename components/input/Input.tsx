type InputFieldType = "email" | "text" | "password";

const InputField = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChangeHandler
}: {
  label: string;
  type: InputFieldType;
  placeholder?: string;
  name: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <label className="block mt-3.5">
      <span className="after:ml-0.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default InputField;
