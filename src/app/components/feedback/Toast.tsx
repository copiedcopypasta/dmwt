import React, { JSX } from 'react';

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface ToastProps {
  icon?: React.ReactNode;
  text: string;
}

export default function Toast({ icon, text }: ToastProps): JSX.Element {
  return (
    <div className="itmes- center rounded-2x1 flex gap-3 px-4 shadow-sm">
      {/*Icon*/}
      {icon && <div className="">{icon}</div>}

      {/*Text*/}
      <p className="">{text}</p>
    </div>
  );
}
