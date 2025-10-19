// Todo: Remove this comment, if you add props to the Interface

import React, { JSX, ReactNode } from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface AlertProps {
  type?: AlertType;
  children: ReactNode;
}

const alertStyles: Record<AlertType, string> = {
  success: 'bg-green-100 border-green-400 text-green-700',
  error: 'bg-red-100 border-red-400 text-red-700',
  warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
  info: 'bg-blue-100 border-blue-400 text-blue-700',
};

export default function Alert({ type, children }: AlertProps): JSX.Element {
  return (
    <div className={`rounded p-3 ${alertStyles[type || 'info']} border`}>
      {children}
    </div>
  );
}
