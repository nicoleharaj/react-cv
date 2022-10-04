import Image from 'next/image';

interface CardProps {
  title: string,
  description: string,
  image?: typeof Image,
}

export default function Card(CardProps) {
  return (
    <div className="w-1/2s bg-white p-4 shadow-md rounded">
      <h3>{CardProps.title}</h3>
    </div>
  );

}