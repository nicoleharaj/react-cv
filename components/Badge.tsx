import { ReactNode } from 'react';

type BadgeProps = {
  children?: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="flex justify-center items-center px-2 py-1 h-fit whitespace-nowrap rounded-md text-center text-xs font-semibold leading-none bg-gray-700 text-white select-none dark:bg-gray-500">
      {children}
    </div>
  );
}
