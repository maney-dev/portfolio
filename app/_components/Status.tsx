/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  ALargeSmall,
  ArrowUpRight,
  Code,
  Home,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
  Weight,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="@maneydev"
            image="http://localhost:3000/maney-dev2.png"
            mediumImage="data:image/jpeg;base64,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"
            description="450"
          />
          <ContactCard
            name="Youssouph Mane"
            image="http://localhost:3000/maney-dev2.png"
            mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEUAfrv///8AerkAcLUpgbzE2urI2OnR4u4Adbfs9PlUksUAeLgAbbPN3+30+PuQt9fk7vVpoMtHjsK0z+RAhr8AZbC+1ejb6PIAarKXvdqFs9Z9rtNspc1Xm8ktisGlxt+AqdBjmMfy32DQAAAFJElEQVR4nO2d2ZKjIBRAEckEJcGFjlsW0///k6OxZ5JOFOwBK1znnpepmipbTi67LCQYaAQBi2i+JMjwz5G/O0U28OODjEzou9NjB03kXxnFoMsw9UemzAEXmAGRl4OMbEAXmAHeyJvMHnxcesS+l5GnFQSmC81JdjLp7t3pcMMu7WSSVQSmC03SyayixPSIgKSHdyfCFYeUqPDdiXBFqMgaGpkB3pDzesrMmVyAd8vu0Mu7U4AgCBCo6KArqP06ERZ/ZlkW54TDbppoeLnWaptGUVTuVZJRwN0GzpJNFNwp1UlAjU542gdPRMUFZHCoaOWzS0d6AjhCFcOU1Cuyqd6dtp9Cp1z6+WlwsWknXYIA2LyOOGpcggjU+IHmkU4m+AVJhusyWR8aSJ9CmN4lCAr27iTOhtcmmQhOHXAYay2/U8Pp1hhdggLKLAI/mWXKGEiFFhrqsh6ZAclnYWGWCa5AZHYvPf8xGSDV2bpk1pTN5lQAEZQKYFVVM6VmmQLMKKDSDwB6aiDlf1ZHE0qR6eAmGQUlk3WINQ3OKNOXGgXIpbM56YY0aQynxPQwTUaTULoyf6Bsuk8DqcAMTE7PQpsCvCFYMlZuyk+ALqRfALl9cWkZrLJ/h4bn9JuK+oAZlgFRkXobyZ6oOPEdoIZ/lLCq6OVyEYcQclQeoAJ6SBAEQZD/DkopYezjC8b6/4DZnFFB8vhUq66vdBvvReVGNf06sCVWGt0WzE0y9gNqn3h6gNP42r52yQO5ba8xcd5tijMd51cbdtY98G3+k9OsLSfHsWV7ZW6X9jOVaoheZ2doXmgeKB9G2kKcVDqpcotPkTCX0WEb7et+vfx0dGQg95C8+2Ydnivz5K/cH7m7umApGcoTfVT+PuFwHLiQjDD83UfSsyubZWT4xZzDHjg6qgcWkeHnn6h01G5slpARMz7IPds4yWkLyOjX403ZuOgPuJcRR/PqohFc7CZzLlNlPyr79yczexvXMs3HdP9Fz9Z+a7xrmXrG0oIJWu9k9v9UYG5E1hnNsYwVynY9qE8yge1neq9kbEPjlUzwaRcav2RqKxfPZCK7fOaXTPBpNez0TMau4fRMRlq1m57JBFaFxjcZq0UhC8ukG9WqYju/w7ax2ea2nIzc1vmu2oUdVcWacp5QarMDcSkZucnC8F41UX7I5sXHQ5my4c+Zn4tkzhiUWLQ0y8hs8rG5I3GcMclpcxjLIjKbielwejTHxqY6W0Jm+zH161LzoNpmPnABGTndkRcX4y/R+iWj68eHo+v0HrE5Wsq9TKldcUtNM1E2raZ7mURbHRl3uex9kkn1sxIiN+Qzr2RM+4d3hrbGKxlT1RpOn6XgnUxkWqTODR88fJIx7uqiORyZjfGNhi07PskUxjbPsNPdJxlzA17pqzOfZMxdq52+NvRIRpo/Gxv2IPskYz7o1rDVHWVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQZg0yKtIgX5cp03yjeSA1n4UTKql7pXlhtIY81pH/9Anz3VvU8EabTfRUz0+fsH+lhQuCIKsGzJ1LRuiFjJy4ChR6Ji7Op/MD3hCbzcJ+ESoSHd6dCFccImJ1kINP0E4F0LVrenjdyaQrKTRh2slIeFcvjcGPspMJtqsoNLQb4ZJZY1n/4f2BFf3VzGUM3obH/XkVt3umCwY8p33dxjZcml1Dlxnuyvy6ATwBbUOTweI3D+SEwl4CpEIAAAAASUVORK5CYII="
            description="100"
          />
        </Card>
      </div>
    </Section>
  );
};

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: String;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-contain"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
        />
      </div>
      <div className="mr-auto">
        {/* flex gap-2 */}
        <div className=" items-center">
          <p className="text-lg font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight
        size={16}
        className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
      />
    </Card>
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
  {
    Logo: ALargeSmall,
    title: "BulkCorrector",
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
      <div className="mr-auto">
        {/* flex gap-2 */}
        <div className=" items-center">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      {/* ml-auto */}
      {/* <div className="ml-auto"> */}
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      {/* </div> */}
    </Link>
  );
};
