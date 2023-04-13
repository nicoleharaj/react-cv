import { ReactNode } from 'react';

type TimelineItemProps = {
  children?: ReactNode;
  className?: string | undefined;
};

export default function TimelineItem({ children, className }: TimelineItemProps) {
  return (
    <li className="mb-10 ml-4 last:mb-0">
      <div className={`absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-gray-100 dark:border-gray-900 dark:bg-gray-700 ` + className}></div>
      {children}
    </li>
  );
}

TimelineItem.Title = function TimelineItemTitle({ children, className }: TimelineItemProps): JSX.Element {
  return <h3 className={`text-lg font-semibold text-gray-900 dark:text-white ` + className}>{children}</h3>;
};

TimelineItem.Date = function TimelineItemDate({ children, className }: TimelineItemProps): JSX.Element {
  return <time className={`mb-1 text-sm uppercase font-normal leading-none text-gray-400 dark:text-gray-500 ` + className}>{children}</time>;
};

TimelineItem.Description = function TimelineItemDescription({ children, className }: TimelineItemProps): JSX.Element {
  return <div className={`text-base font-normal text-gray-500 dark:text-gray-400 ` + className}>{children}</div>;
};
