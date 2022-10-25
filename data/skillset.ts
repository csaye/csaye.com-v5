export type SkillsetSubsection = {
  title: string;
  icons: string[];
}

export type SkillsetSection = {
  title: string;
  subsections: SkillsetSubsection[];
}

export const skillset: SkillsetSection[] = [
  {
    title: "Games",
    subsections: [
      {
        title: "Frameworks",
        icons: ["Unity", "Pygame", "MonoGame"]
      },
      {
        title: "Languages",
        icons: ["Python", "C#", "Java", "C++"]
      },
      {
        title: "Audio",
        icons: ["FL Studio", "Audacity"]
      }
    ]
  },
];
