import React, { ReactElement } from 'react';

interface ToastProps {
  icon?: React.ReactNode;
  text: string;
}

export default function Toast({ icon, text }: ToastProps): ReactElement {
  return (
    <div className="itmes- center rounded-2x1 flex gap-3 px-4 shadow-sm">
      {/*Icon*/}
      {icon && <div className="">{icon}</div>}

      {/*Text*/}
      <p className="">{text}</p>
    </div>
  );
}
