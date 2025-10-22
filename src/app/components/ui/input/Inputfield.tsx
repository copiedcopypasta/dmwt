import React, { ReactElement, ChangeEvent } from 'react';

interface InputfieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

export default function Inputfield({
  label,
  value,
  onChange,
  placeholder,
  error,
}: InputfieldProps): ReactElement {
  return (
    <div>
      <label className="mb-1 block font-medium">{label}</label>
      <input
        className={`rounded border p-2 focus:ring-2 focus:outline-none ${
          error
            ? 'border-red-500 focus:ring-red-200'
            : 'border-gray-400 focus:ring-blue-200'
        }`}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
