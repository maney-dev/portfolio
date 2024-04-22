/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { TwitterIcon } from "./icons/TwitterIcon";
import Link from "next/link";
import { XaralaIcon } from "./icons/XaralaIcon";
import Image from "next/image";
const Code = ({ className, ...props }: ComponentPropsWithRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 p-2 text-primary rounded-sm",
        className
      )}
      {...props}
    />
  );
};
export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Youssouph Mane</h2>
        <h3 className="text-3xl font-caption">Web an Mobile developer </h3>
        <p>
          I love creating content on{" "}
          <Link href={"https://twitter.com/YoussouMan4"}>
            <Code className="inline-flex items-center gap-1">
              <TwitterIcon size={16} className="inline" />
              Twitter
            </Code>
          </Link>
          , currently working at
          <Link href={"https://www.xarala.co/fr/"}>
            <Code className="inline-flex items-center gap-1">
              {/* <img
                src="https://www.xarala.co/static/img/logo.b5700a8deb63.png"
                style={{ width: 16, height: "auto", color: "white" }}
                alt="senegale flag"
              /> */}
              <Image
                src="/xarala logo.png"
                alt="Xarala Logo"
                width={16}
                height={16}
              />
              Xarala
            </Code>
          </Link>
          . Living in
          <Link href={"https://www.xarala.co/fr/"}>
            <Code className="inline-flex items-center gap-1">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAAYFBMVEUAhT/jGyP970JDokD07EIZjz8Ehz8Mij+00UH57UK700Jbq0Dw6kJ+ukHo5kKuzkGGvkGPwUBts0A2nEChyUFhrkDA1kFvtEAekUDH2EEjlD89n0BSqEDc4UHq50KiyUFYl4xWAAACJ0lEQVR4nO3a2ZKCMBCFYSds4gIq4gI4vv9bDiiDCwkyU9x01587i9MXX9kU6cBsNt0y062v6daEQIQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIEfbXVrvQD3zlwjRMlQur2VK3MI5mUaxaOK9jc9XCvI7lmoVxUMeCEW0qVri45RaKhfktt1MsDG65EW0qVXhogwe1wl0bPKoVntrgSavw3CXPSoXHLvmxTYUKiy5ZaBD6yyIrveeVPUWzlytlVix9cULj538ord7mYhHCeo8WjCyMeuOGEKFJvFF1ZSLyPryvTfixKtxY6uQIzbn4UHSybuEECc1qOVhTfVurJAmN2UfOitB1eipLaC6ZoyC7uEqECU28tuZ37sNhacL60djv1P5DULTQ9Bs1G4rLEyaWeP85L1m4tcSH3kLJE9q2b54m4bd18zbQpuKEe2t+r0j41KTZ4+8caFNpwlWnCuZPU2No35NKFHZN6jW33mNqvKoRVvfr4br9vW3/00qLsG3S0+OUtJ0aw5US4fV29WUSXN2PqZxfLQgTNk0avT8a0mYv7mxTWUI/sk6CzdQYuuYnWcK0ngRtbwybqdHVprKEnnMSXESlBmFsOQ79XUnpaFNRwuHv2DQI/7UQIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFCscIfO/iIHzG/XcsAAAAASUVORK5CYII="
                style={{ width: 16, height: "auto" }}
                alt="senegale flag"
              />
              Senegal
            </Code>
          </Link>
          .
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <style>
          {`
          .image-container {
            width: 200px;
            height: 200px;
            overflow: hidden;
            border-radius: 50%;
          }
          .circle-image {
            width: 200%;
            height: 140%;
            object-fit: cover;
            object-position: center;
            
          }
        `}
        </style>
        <div className="image-container">
          <img
            src="/maney-dev2.png"
            alt="Xarala Logo"
            className="circle-image"
          />
        </div>
      </div>
    </Section>
  );
};
