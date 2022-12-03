import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
};

const Input: FC<InputProps> = ({ placeholder, disabled, value, onChange, name, label }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="text"
        id="small-input"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </>
  );
  
};

Input.defaultProps = {
  disabled: false,
  name: 'name here',
  label: 'Label',
  placeholder: 'text here',
};

export default Input;
