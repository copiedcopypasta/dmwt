import { ReactNode } from 'react';

const LoadingLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className='flex min-h-screen w-full flex-1 items-center justify-center'>
      {children}
    </div>
  );
};

export default LoadingLayout;
