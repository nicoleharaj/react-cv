import { forwardRef } from "react";
interface TagProps {
  name: string;
}

const Tag = forwardRef<HTMLDivElement, TagProps>(function Tag(
  { name }: TagProps,
  ref
) {
  const lowercased = name.toLowerCase();

  return (
    <span
      ref={ref}
      className={`font-white rounded-lg ${
        lowercased === "python"
          ? "bg-jonquil"
          : lowercased === "typescript"
          ? "bg-blue-500"
          : lowercased === "rust"
          ? "bg-flame"
          : lowercased === "next.js"
          ? "bg-off-black"
          : lowercased === "react"
          ? "bg-jungle-green-500"
          : "bg-off-black"
      } px-2 py-[0.15rem] text-sm font-semibold text-white`}
    >
      {name}
    </span>
  );
});

export default Tag;
