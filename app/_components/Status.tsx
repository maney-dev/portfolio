/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  Code,
  Home,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
  Weight,
} from "lucide-react";
import Link from "next/link";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      {/* <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
        Side project
      </Card>
      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">Work</Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div> */}
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url="/"
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "CodeLine",
    description: "A plateforme for developer to share their knowledge",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "PowerNote",
    description: "A plateforme for developer to share their knowledge",
    url: "/",
  },
  {
    Logo: Rss,
    title: "PowerPost",
    description: "A plateforme for developer to share their knowledge",
    url: "/",
  },
  {
    Logo: MessageCircle,
    title: "ChatToCode",
    description: "A plateforme for developer to share their knowledge",
    url: "/",
  },
  {
    Logo: Weight,
    title: "LinkedLeads",
    description: "A plateforme for developer to share their knowledge",
    url: "/",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};
const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <div className="text-lg font-semibold">{props.title}</div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorkProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/D560BAQEjkbgwKpyANw/company-logo_200_200/0/1703195097083/xarala221_logo?e=1721865600&v=beta&t=4W7N1nXUV5JI9q7gN9Qi4WY9svC85fhp6uAWp4hj57Q",
    title: "Xarala",
    role: "Developer",
    date: "2023 - Present",
    url: "https://xarala.co/fr",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C560BAQFOkhtX7ZxrQg/company-logo_100_100/0/1630625485401/itecom_senegal_logo?e=1721865600&v=beta&t=aH5OJvsWXq1iCujeEi2HmkHQe7TriY20TPaH4lyaXlE",
    title: "Itecom",
    role: "Mentor",
    date: "2019 - 2022",
    url: "https://www.facebook.com/itecom/?locale=fr_FR",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D560BAQEjkbgwKpyANw/company-logo_200_200/0/1703195097083/xarala221_logo?e=1721865600&v=beta&t=4W7N1nXUV5JI9q7gN9Qi4WY9svC85fhp6uAWp4hj57Q",
    title: "Xarala",
    role: "Developer",
    date: "2023 - Present",
    url: "https://xarala.co/fr",
    freelance: true,
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};
const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <img
          src={props.image}
          alt={props.title}
          className="w-10 h-10 object-contain rounded-md"
        />
      </span>
      <div>
        <div className="text-lg font-semibold">{props.title}</div>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
