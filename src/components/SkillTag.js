import { useState, useEffect, useCallback } from "react";

const SkillTag = ({ title, icon }) => {
  const [hoverColor, setHoverColor] = useState("");

  const getRandomColor = useCallback(() => {
    const colors = [
      "hover:btn-info",
      "hover:btn-info-content",
      "hover:btn-success",
      "hover:btn-success-content",
      "hover:btn-warning",
      "hover:btn-error",
      "hover:btn-error-content",
      "hover:btn-accent",
      "hover:btn-secondary",
      "hover:btn-accent-focus",
      "hover:btn-secondary",
      "hover:btn-primary",
      "hover:btn-primary-focus",
      "hover:btn-secondary-focus",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
  }, []);

  useEffect(() => {
    setHoverColor(getRandomColor());
  }, [getRandomColor]);

  const handleHover = () => {
    setHoverColor(getRandomColor());
  };

  return (
    <div
      className={`${hoverColor} btn btn-outline px-4 flex flex-nowrap items-center justify-center w-min m-2`}
      onMouseEnter={handleHover}
    >
      <span className="mr-1 w-[20px] h-[20px]">{icon}</span>
      <span className="whitespace-nowrap">{title}</span>
    </div>
  );
};

export default SkillTag;
