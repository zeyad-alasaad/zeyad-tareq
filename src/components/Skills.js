"use client";

import { skills } from "@/constants/skills";
import { useMemo } from "react";
import SkillTag from "./SkillTag";
import Section from "./Section";

const Skills = () => {
  const skillsList = useMemo(
    () =>
      skills.map((skill) => (
        <SkillTag key={skill.id} title={skill.name} icon={skill.icon} />
      )),
    []
  );

  return (
    <Section title="Skills">
      <div className="flex flex-wrap">{skillsList}</div>
    </Section>
  );
};

export default Skills;
