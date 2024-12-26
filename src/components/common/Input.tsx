import React from 'react';
// import { AiFillCloseCircle } from 'react-icons/ai';

type InputProps = {
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onChange, type, placeholder, errorMessage, ...rest }, ref) => {
    return (
      <div className="relative">
        <input
          className={`w-full p-3 bg-inputBackGround text-lightGray rounded-sm border border-zinc-800 focus:outline-none placeholder-placeholder ${className}`}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          ref={ref}
          {...rest}
        />
        {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}

        {/* {value && (
        <button type="button" onClick={() => setValue('')}>
          <AiFillCloseCircle className="text-gray-300 absolute right-[15px] top-[50%] -translate-y-[50%]" />
        </button>
      )} */}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
