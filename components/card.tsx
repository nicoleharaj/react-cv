import { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string | undefined;
}

export default function Card({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}

Card.Header = function CardHeader({ children, className }: CardProps) {
  return <h3 className={className}>{children}</h3>;
};

Card.Body = function CardBody({ children, className }: CardProps) {
  return <p className={className}>{children}</p>;
};
