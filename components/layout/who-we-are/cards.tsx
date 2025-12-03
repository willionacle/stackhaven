import { Eye, Hammer, PersonStanding, Zap } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

interface CardType {
  title: string;
  icon: ReactNode;
  desc: string;
}

export default function Cards() {
  const cards: CardType[] = [
    {
      title: "Craftsmanship",
      desc: "We build with precision and intention, making sure every part feels clean and well-crafted.",
      icon: <Hammer />,
    },
    {
      title: "Transparency",
      desc: "We communicate openly, keeping everything straightforward and easy to understand.",
      icon: <Eye />,
    },
    {
      title: "Speed + Quality",
      desc: "We work quickly without cutting corners, delivering results that feel polished.",
      icon: <Zap />,
    },
    {
      title: "Human-first Design",
      desc: "We create experiences that are intuitive, friendly, and easy for anyone to use.",
      icon: <PersonStanding />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mt-16">
      {cards.map((item, idx) => (
        <Card
          key={idx}
          className="bg-transparent border border-dashed p-4 backdrop-blur-md"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {item.icon}
              {item.title}
            </CardTitle>
            <CardDescription>{item.desc}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
