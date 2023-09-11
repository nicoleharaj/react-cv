import { type ReactNode } from "react";
import Image from "next/image";

type ProjectCardProps = {
  children?: ReactNode;
};

type ProjectImageProps = {
  src: string;
};

export default function ProjectCard({ children }: ProjectCardProps) {

  
  
  return (
    <div
      className="card-transition w-fit cursor-pointer shadow hover:scale-105 hover:shadow-xl"
      tabIndex={0}
    >
      {children}
    </div>
  );
}

ProjectCard.Title = function ProjectCardTitle({
  children,
}: ProjectCardProps): JSX.Element {
  return (
    <h3 className={`text-2xl font-semibold dark:text-white `}>{children}</h3>
  );
};

ProjectCard.Description = function ProjectCardDescription({
  children,
}: ProjectCardProps): JSX.Element {
  return <p>{children}</p>;
};

ProjectCard.Image = function ProjectCardImage({
  src,
}: ProjectImageProps): JSX.Element {
  return (
    <div className="relative h-60 w-60 overflow-hidden xl:h-56 xl:w-56">
      <Image fill src={src} alt="Project preview image" />
    </div>
  );
};
