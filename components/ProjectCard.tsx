import { ReactNode } from 'react';
import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';

type ProjectCardProps = {
  children?: ReactNode;
  className?: string | undefined;
};

export default function ProjectCard({ children, className }: ProjectCardProps) {
  return (
    <li
      className={
        `flex flex-col-reverse gap-6 items-start justify-center md:flex-row border-b pb-6 dark:border-b-gray-700 last:border-b-transparent last:pb-0 dark:last:border-b-transparent ` + className
      }
    >
      {children}
    </li>
  );
}

ProjectCard.Title = function ProjectCardTitle({ children, className }: ProjectCardProps): JSX.Element {
  return <h3 className={`text-lg w-full font-semibold dark:text-white ` + className}>{children}</h3>;
};

ProjectCard.Description = function ProjectCardDescription({ children, className }: ProjectCardProps): JSX.Element {
  return <p className={`text-base font-normal text-gray-500 dark:text-gray-400 ` + className}>{children}</p>;
};

ProjectCard.Image = function ProjectCardImage({ width, src }: ImageLoaderProps): JSX.Element {
  return <Image layout="fill" width={width} src={src} sizes="100vw" className="w-full h-auto" alt="" />;
};
