import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = ({ label, error, className, ...props }: FormInputProps) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
      <input
        className={`px-4 py-3 rounded-xl border bg-white text-slate-900 outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-500/20 ${
          error ? 'border-red-500' : 'border-slate-200 focus:border-sky-500'
        }`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
    </div>
  );
};

export default FormInput;