import React, { JSX } from 'react';

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface ToastProps {
  icon?: React.ReactNode;
  text: string;
}

export default function Toast({ icon, text}: ToastProps): JSX.Element {
  return (
    <div className="flex itmes- center gap-3 px-4 rounded-2x1 shadow-sm">
      {/*Icon*/}
      {icon && (
        <div className="">
          {icon}
        </div>
      )}

      {/*Text*/}
      <p className="">{text}</p>
    </div>
  );
}
