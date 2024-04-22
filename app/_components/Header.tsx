import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TwitterIcon } from "./icons/TwitterIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">maney.com</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/maney-dev"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://twitter.com/YoussouMan4"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <TwitterIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.instagram.com/youlemonumental4/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <InstagramIcon size={16} className="text-foreground" />
          </Link>
          {/* <Link
            href="https://www.facebook.com/youssou.mane.942?locale=fr_FR"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
            <FacebookIcon size={16} className="text-foreground" />
          </Link> */}
          <Link
            href="https://www.linkedin.com/in/youssouph-n-b-man%C3%A9-a639b6292/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
