import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Bg from "./bg";
import { Mail, Send } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    desc: "For project inquiries, collaborations, and detailed discussions.",
    link: "mailto:stackhaven.dev@gmail.com",
    label: "stackhaven.dev@gmail.com",
  },
  {
    icon: Send,
    title: "Telegram",
    desc: "For quick questions, fast replies, and real-time messages.",
    link: "https://t.me/StackHavenTeam",
    label: "@StackHavenTeam",
  },
];

export default function Contacts() {
  return (
    <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-10 text-center py-0 lg:py-10 relative lg:mt-16">
      <Bg />
      {contactItems.map((item, i) => (
        <>
          <div
            key={item.title}
            className="max-w-[300px] space-y-3 flex flex-col items-center"
          >
            <item.icon className="w-16 h-16 dark:text-neutral-400" />
            <h1>{item.title}</h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
            <Button
              className="w-full max-w-[260px] backdrop-blur-sm bg-neutral-900 dark:bg-neutral-900/50 text-white rounded-full"
              variant="outline"
              asChild
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </Button>
          </div>
          {i === 0 && (
            <Separator
              orientation="vertical"
              className="h-[180px] bg-amber-100"
            />
          )}
        </>
      ))}
    </div>
  );
}
