import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { Computer, PenTool, Server, Smartphone } from "lucide-react";
import { ReactNode } from "react";

interface CardTypes {
  title: string;
  desc: string;
  icon: ReactNode;
}

export default function Cards() {
  const services: CardTypes[] = [
    {
      icon: <Computer />,
      title: "Web Application Development",
      desc: "We build fast, responsive, and modern web apps using frameworks like React, Next.js, and Vue. Our focus is clean UI, smooth performance, and scalable architecture.",
    },
    {
      icon: <Smartphone />,
      title: "Mobile Application Development",
      desc: "We create mobile apps that feel smooth and reliable using Flutter or React Native. From simple tools to full-featured applications, we bring ideas to life on both iOS and Android.",
    },
    {
      icon: <PenTool />,
      title: "UI/UX & Product Design",
      desc: "We design intuitive interfaces and seamless user journeys. From wireframes to final layouts, we ensure every screen feels clear, modern, and easy to use.",
    },
    {
      icon: <Server />,
      title: "API & Backend Development",
      desc: "We build stable, scalable backend systems using Node.js and Express. This includes APIs, databases, authentication, and integrations needed for your app to run smoothly.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-3 md:gap-10">
      {services.map((item, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <Card
            key={idx}
            className={clsx(
              "w-full overflow-hidden saturate-110 inset-0 backdrop-blur-lg shine",
              isEven ? "card-blue" : "card-green"
            )}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="dark:border dark:bg-transparent bg-neutral-950/20 text-white p-3 rounded-lg backdrop-blur-lg">
                  {item.icon}
                </div>
                <span
                  className={clsx(
                    "dark:bg-clip-text dark:text-transparent text-xl",
                    isEven
                      ? "dark:bg-linear-to-r from-blue-400 to-cyan-400"
                      : "dark:bg-linear-to-r from-green-300 to-green-500"
                  )}
                >
                  {item.title}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {item.desc}
              <span
                className="pointer-events-none absolute inset-0 z-0 rotate-[-24deg] mix-blend-soft-light"
                aria-hidden="true"
              >
                <span className="absolute -top-24 left-[45%] h-[248px] w-10 rounded-[100%] bg-linear-to-b from-white/35 from-35% to-[#999DFF]/10 opacity-50 blur-[30px]"></span>
                <span className="absolute -top-32 left-[32%] h-[400px] w-20 rounded-[100%] bg-linear-to-b from-white/35 from-35% to-[#999DFF]/10 opacity-50 blur-[30px]"></span>
              </span>
              <span className="pointer-events-none absolute bottom-0 right-[-20%] z-0 h-2/3 w-full translate-y-1/2 bg-[url(/images/dotted-pattern.png)] bg-size-[20px_20px] bg-center bg-repeat opacity-85 mix-blend-plus-lighter mask-[radial-gradient(40%_50%_at_50%_50%,black_5%,transparent_100%)]"></span>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
