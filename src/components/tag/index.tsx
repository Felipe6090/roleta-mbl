import React from "react";

interface TagProps {
  title?: string;
  backgroundColor?: string;
  textColor?: string;
}

const Tag: React.FC<TagProps> = ({ title, backgroundColor, textColor = "white" }) => {
  return (
    <span
      className="px-3 py-1 text-xs font-semibold rounded-full"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {title}
    </span>
  );
};

export default Tag;
