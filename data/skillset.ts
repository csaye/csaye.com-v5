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
    title: "Simulations",
    subsections: [
      {
        title: "Languages",
        icons: ["Python", "C++", "C#"]
      },
      {
        title: "Audio/Visuals",
        icons: ["FL Studio", "Audacity", "Aseprite"]
      },
      {
        title: "Frameworks",
        icons: ["Unity", "Pygame", "MonoGame"]
      },
    ]
  },
  {
    title: "Apps",
    subsections: [
      {
        title: "Frameworks",
        icons: ["React", "Next.js", "React Native"]
      },
      {
        title: "Languages",
        icons: ["TypeScript", "JavaScript", "HTML5/CSS3"]
      },
      {
        title: "Backend",
        icons: ["Firebase", "Vercel", "Node.js"]
      },
    ]
  },
  {
    title: "Other",
    subsections: [
      {
        title: "Services",
        icons: ["Git/GitHub", "Expo", "Stripe", "OpenAI", "Figma", "Trello"]
      },
      {
        title: "Editors",
        icons: ["VS Code", "Atom", "Visual Studio"]
      }
    ]
  }
];
