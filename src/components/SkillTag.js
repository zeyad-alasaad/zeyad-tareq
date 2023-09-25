const SkillTag = ({ title, icon }) => {
  return (
    <div
      className={`btn btn-outline px-4 flex flex-nowrap items-center justify-center w-min m-2`}
    >
      <span className="mr-1 w-[20px] h-[20px]">{icon}</span>
      <span className="whitespace-nowrap">{title}</span>
    </div>
  );
};

export default SkillTag;
