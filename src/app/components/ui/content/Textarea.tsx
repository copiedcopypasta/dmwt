import React, { JSX } from 'react';

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface TextareaProps {
  text: string;
  label?: string;
}

export default function Textarea({ text, label }: TextareaProps): JSX.Element {
  return (
    <div className="flex flex-col space-y-2">
      {/*Optinal label*/}
      {label && <label className="">{label}</label>}

      {/*Textarea*/}
      <textarea
        value={text}
        readOnly
        className="min-h-[100px] w-full cursor-default focus:outline-none"
      />
    </div>
  );
}
