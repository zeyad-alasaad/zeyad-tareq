"use client";

import { skills } from "@/constants/skills";
import { useMemo } from "react";
import SkillTag from "./SkillTag";

const Skills = () => {
  const skillsList = useMemo(
    () =>
      skills.map((skill) => (
        <SkillTag key={skill.id} title={skill.name} icon={skill.icon} />
      )),
    []
  );

  return (
    <div className="mt-8">
      <div className="text-secondary w-full text-2xl">Skills</div>
      <div className="flex flex-wrap">{skillsList}</div>
    </div>
  );
};

export default Skills;
