"use client";
import { useState, useEffect } from "react";
import GlowingTracer from "@/components/glow-tracer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { IconBrandBehance } from "@tabler/icons-react";

export default function Cards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Ivan Hendrick Navarro",
      role: "Systems Architect • Logic & Data Flow Engineer",
      bio: "Ivan is an architect in the making — the engineer who ensures systems are correct, fast, scalable, and structurally sound. His enterprise-level mindset brings order, long-term stability, and strategic direction to any team.",
      avatar: "/images/team/ivan.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/ivanhendrick",
        github: "https://github.com/ivanhendrick",
      },
    },
    {
      name: "Jejomar Baldoza",
      role: "Fullstack & Mobile Engineer • UI/UX • Systems Generalist",
      bio: "A rare all-terrain engineer who understands every layer of the stack — frontend, backend, mobile, database, UI/UX, and infrastructure. Willie acts as the glue of the team, enabling rapid execution, technical clarity, and founder-level problem solving.",
      avatar: "/images/team/jejo.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/jjmrbldz",
        github: "https://github.com/jjmrbldz",
        behance: "https://www.linkedin.com/in/jjmrbldz",
      },
    },
    {
      name: "Julius Ablis",
      role: "Backend Engineer • API Specialist",
      bio: "Julius is the dependable engine of the backend — the type of engineer who takes an endpoint, logic, and requirements, and delivers clean, consistent, scalable API implementations. A backend dev who truly understands SQL flows is rare, and Julius brings that strength.",
      avatar: "/images/team/julius.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/tsongjuls0222",
        github: "https://github.com/tsongjuls0222",
      },
    },
    {
      name: "William Elcano II",
      role: "Front-end Developer • UI/UX Designer",
      bio: "William brings the visual clarity and speed your backend-leaning lineup needs. A UI/UX-focused engineer who executes fast, ensures consistent user experience, and maintains high design quality across products.",
      avatar: "/images/team/will.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/william-ii-elcano/",
        github: "https://github.com/willionacle",
      },
    },
  ];

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  const toggleCard = (idx: number) => {
    setActiveCard(activeCard === idx ? null : idx);
  };

  useEffect(() => {
    const close = () => setActiveCard(null);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-3 relative">
      {teamMembers.map((item, idx) => {
        const isActive = activeCard === idx;

        return (
          <Card
            key={idx}
            onClick={() => toggleCard(idx)}
            className={`p-0 overflow-hidden relative border-0 rounded-none cursor-pointer group transition-all duration-600 ${
              isActive ? "force-hover" : ""
            }`}
          >
            <GlowingTracer />
            <CardContent className="p-0">
              <img src={item.avatar} className="w-full" />
            </CardContent>
            <CardFooter
              className={`absolute bottom-0 w-full flex h-[150px] md:h-[120px] p-4 duration-600 justify-between lg:backdrop-blur-sm flex-col items-start z-10 group-hover:p-7 group-hover:h-full group-hover:bg-linear-to-b from-white to-white/50 dark:from-neutral-800/90 dark:to-neutral-950/90 ${
                isActive
                  ? "p-4 h-full bg-linear-to-b from-white to-white/50 dark:from-neutral-800/90 dark:to-neutral-950/90"
                  : ""
              }`}
            >
              <div>
                <h1
                  className={`text-white text-sm md:text-md lg:text-xl font-semibold group-hover:text-neutral-900 dark:group-hover:text-white ${
                    isActive ? "text-neutral-900! dark:text-white!" : ""
                  }`}
                >
                  {item.name}
                </h1>
                <p
                  className={`text-white/45 text-xs mb-3 group-hover:text-neutral-900 dark:group-hover:text-neutral-400 ${
                    isActive ? "text-neutral-900! dark:text-neutral-400!" : ""
                  }`}
                >
                  {item.role}
                </p>
                <div className="flex flex-nowrap gap-0 text-xs">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => openLink(item.socials["linkedin"])}
                  >
                    <Linkedin
                      className={`text-white group-hover:text-neutral-600 dark:group-hover:text-white w-4 ${
                        isActive ? "text-neutral-600! dark:text-white!" : ""
                      }`}
                    />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => openLink(item.socials["github"])}
                  >
                    <Github
                      className={`text-white group-hover:text-neutral-600 dark:group-hover:text-white w-4 ${
                        isActive ? "text-neutral-600! dark:text-white!" : ""
                      }`}
                    />
                  </Button>
                  {item.socials["behance"] && (
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() =>
                        openLink(item.socials["behance"] as string)
                      }
                    >
                      <IconBrandBehance
                        className={`text-white group-hover:text-neutral-600 dark:group-hover:text-white text-lg ${
                          isActive ? "text-neutral-600! dark:text-white!" : ""
                        }`}
                      />
                    </Button>
                  )}
                </div>
              </div>
              <span
                className={`opacity-0 blur-3xl text-sm duration-600 group-hover:blur-none group-hover:opacity-100 ${
                  isActive ? "text-[10px] lg:text-sm opacity-100 blur-none" : ""
                }`}
              >
                {item.bio}
              </span>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
