import Image from 'next/image';

export function Spinner() {
  return (
    <Image
      src='/spinner.webp'
      alt='Spinner loading animation'
      width={240}
      height={240}
    />
  );
}
