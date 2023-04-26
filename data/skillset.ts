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
        icons: ["Python", "C#", "Java", "C++"]
      },
      {
        title: "Audio",
        icons: ["FL Studio", "Audacity"]
      },
      {
        title: "Frameworks",
        icons: ["Unity", "Pygame", "MonoGame"]
      },
    ]
  },
  {
    title: "Websites",
    subsections: [
      {
        title: "Frameworks",
        icons: ["React", "Next.js", "Angular"]
      },
      {
        title: "Languages",
        icons: ["JavaScript", "TypeScript"]
      },
      {
        title: "Backend",
        icons: ["Firebase", "Node.js"]
      },
      {
        title: "Deployment",
        icons: ["Vercel", "Netlify"]
      }
    ]
  },
  {
    title: "Tools",
    subsections: [
      {
        title: "Art",
        icons: ["Aseprite", "GIMP"]
      },
      {
        title: "Services",
        icons: ["GitHub", "Trello", "SendGrid", "Stripe", "OpenAI"]
      },
      {
        title: "Editors",
        icons: ["VS Code", "Visual Studio"]
      }
    ]
  }
];
