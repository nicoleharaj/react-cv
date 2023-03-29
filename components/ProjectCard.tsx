import { ReactNode } from 'react';
import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';

type ProjectCardProps = {
  children?: ReactNode;
  className?: string | undefined;
};

export default function ProjectCard({ children, className }: ProjectCardProps) {
  return (
    <li className={`flex flex-col-reverse gap-6 items-start justify-center md:flex-row border-b pb-6 dark:border-b-gray-500 last:border-b-transparent dark:last:border-b-transparent ` + className}>
      {children}
    </li>
  );
}

ProjectCard.Title = function ({ children, className }: ProjectCardProps) {
  return <h2 className={`text-lg sm:text-2xl w-full font-semibold dark:text-gray-300 ` + className}>{children}</h2>;
};

ProjectCard.Description = function ({ children, className }: ProjectCardProps) {
  return <p className={`dark:text-gray-400 ` + className}>{children}</p>;
};

ProjectCard.Image = function ({ width, src }: ImageLoaderProps) {
  return <Image layout="fill" width={width} src={src} sizes="100vw" className="w-full h-auto" alt="" />;
};
