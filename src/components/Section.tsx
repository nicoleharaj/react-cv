import { type ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
}

export default function Container({ children }: SectionProps) {
  return (
    <section className="min-h-[calc(100vh-7.5rem)] w-full">{children}</section>
  );
}
