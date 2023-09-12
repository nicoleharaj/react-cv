import { type ReactNode, forwardRef } from "react";
import { cn } from "~/utils/merge";

interface ContainerProps {
  children?: ReactNode;
  className?: string | undefined;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, className },
  ref
) {
  return (
    <main
      ref={ref}
      className={cn(
        `flex w-[calc(100vw-2.5rem)] max-w-screen-lg flex-col gap-10 px-5 py-16 ${className}`
      )}
    >
      {children}
    </main>
  );
});

export default Container;