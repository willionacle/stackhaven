import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Nepro from "@/public/images/projects/jejo/nepro.png";
import SplenDoor from "@/public/images/projects/jejo/splendor.png";
import GWallet from "@/public/images/projects/jejo/g-wallet.png";
import VicSports from "@/public/images/projects/jejo/vicsports.png";
import Minigame from "@/public/images/projects/jejo/minigame.png";

import Inventory from "@/public/images/projects/julius/invertoy-api.png";
import LiveStreaming from "@/public/images/projects/julius/livestream-comment.png";
import SportsBetting from "@/public/images/projects/julius/sportsbetting.png";
import Baccarat from "@/public/images/projects/julius/baccarat.png";

import Silver from "@/public/images/projects/ivan/silver.png";
import SunTanning from "@/public/images/projects/ivan/suntanning.png";
import Zealestate from "@/public/images/projects/ivan/zealestate.png";
import Univonna from "@/public/images/projects/ivan/univonna.png";
import Million from "@/public/images/projects/ivan/million.png";

import HiltonCasino from "@/public/images/projects/william/hilton-casino.png";
import Nrg from "@/public/images/projects/william/nrg-casino.png";
import Lawsys from "@/public/images/projects/william/lawsys.png";
import Omg from "@/public/images/projects/william/omg-landing.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  category: string;
}

export default function Cards({ category }: Props) {
  const [visibleCount, setVisibleCount] = useState(8);

  const projects = [
    {
      title: "Nipro Philippines",
      desc: "A Japanese multinational delivering innovative, high-quality healthcare and welfare solutions",
      link: "https://nipro.com.ph/",
      image: Nepro,
      author: "Jejo Baldoza",
      category: "design",
    },
    {
      title: "SplenDoor",
      desc: "Polish producer of steel doors, PVC windows, and aluminum joinery under SplenDoor and InvesDoor.",
      link: "https://www.splendoor.com/",
      image: SplenDoor,
      author: "Jejo Baldoza",
      category: "development",
    },
    {
      title: "G-Wallet",
      desc: "Cryptocurrency Wallet Website (South Korea) Maimai Intech, Inc.",
      link: "https://www.behance.net/gallery/105151315/UIUX-Design/modules/691469201",
      image: GWallet,
      author: "Jejo Baldoza",
      category: "Design",
    },
    {
      title: "VicSports",
      desc: "Sports Betting Website (South Korea) Maimai Intech, Inc.",
      link: "https://www.behance.net/gallery/105151315/UIUX-Design/modules/708606535",
      image: VicSports,
      author: "Jejo Baldoza",
      category: "Design",
    },
    {
      title: "Minigame",
      desc: "Minigame website featuring animations and real-time gameplay.",
      link: "https://www.behance.net/gallery/105151315/UIUX-Design",
      image: Minigame,
      author: "Jejo Baldoza",
      category: "Design",
    },
    {
      title: "Inventory Management API",
      desc: "API that manages stocks, items, and sales with automatic stock deduction and history tracking.",
      link: null,
      image: Inventory,
      author: "Julius Ablis",
      category: "Development",
    },
    {
      title: "Live Stream Comment System",
      desc: "A comment feature that supports replies, likes/dislikes, and nested threads for live sports streams.",
      link: null,
      image: LiveStreaming,
      author: "Julius Ablis",
      category: "Development",
    },
    {
      title: "Sports Betting API Aggregator",
      desc: "Service that aggregates sports events, odds, and markets into one unified API.",
      link: null,
      image: SportsBetting,
      author: "Julius Ablis",
      category: "Development",
    },
    {
      title: "Realtime Baccarat Game Engine",
      desc: "Backend engine that manages baccarat rounds, timers, dealer actions, and realtime updates via Socket.IO.",
      link: null,
      image: Baccarat,
      author: "Julius Ablis",
      category: "Development",
    },
    {
      title: "Realtime Baccarat Game Engine",
      desc: "Backend engine that manages baccarat rounds, timers, dealer actions, and realtime updates via Socket.IO.",
      link: null,
      image: Baccarat,
      author: "Julius Ablis",
      category: "Development",
    },
    {
      title: "Silicon Verified",
      desc: "Silicon Verified (SilVer) is a privately-owned IC design solutions house based in Alabang, Muntinlupa City, Philippines.",
      link: "https://www.siliconverified.com/",
      image: Silver,
      author: "Ivan Hendrick Navarro",
      category: "Development",
    },
    {
      title: "Suntanning",
      desc: "Singapore’s first indoor tanning studio with modern booths and exclusive California Tan products.",
      link: "https://suntanningstudio.com.sg/",
      image: SunTanning,
      author: "Ivan Hendrick Navarro",
      category: "Development",
    },
    {
      title: "Zealestate",
      desc: "E-Commerce Website for Real Estate Property",
      link: "https://suntanningstudio.com.sg/",
      image: Zealestate,
      author: "Ivan Hendrick Navarro",
      category: "Development",
    },
    {
      title: "Univonna",
      desc: "E-Commerce Website with Customize WooCommerce",
      link: "https://univonna.com/",
      image: Univonna,
      author: "Ivan Hendrick Navarro",
      category: "Development",
    },
    {
      title: "Million",
      desc: "Provider of part-marking, traceability, and plastic fabrication solutions, focused on quality and efficiency",
      link: "https://univonna.com/",
      image: Million,
      author: "Ivan Hendrick Navarro",
      category: "Development",
    },
    {
      title: "Hilton Casino",
      desc: "Online baccarat game and betting platform designed for smooth gameplay, real-time results, and engaging user experience.",
      link: null,
      image: HiltonCasino,
      author: "Willam Elcano II",
      category: "Development",
    },
    {
      title: "NRG Casino",
      desc: "A modern online casino betting platform delivering seamless gameplay, instant results, and an immersive user experience.",
      link: null,
      image: Nrg,
      author: "Willam Elcano II",
      category: "Development",
    },
    {
      title: "LawSys",
      desc: "A streamlined office management system built for organizing cases, clients, and tasks within a law firm.",
      link: null,
      image: Lawsys,
      author: "Willam Elcano II",
      category: "Development",
    },
    {
      title: "OMG Landing Page",
      desc: "A sleek landing page built for an online minigame betting site, focused on user engagement and smooth visual flow.",
      link: null,
      image: Omg,
      author: "Willam Elcano II",
      category: "Development",
    },
  ];

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  const filteredProjects = projects.filter(
    (item) =>
      category === "all" ||
      item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5">
        {filteredProjects.slice(0, visibleCount).map((item, idx) => (
          <Card
            key={idx}
            className="dark:bg-neutral-900/50 backdrop-blur-md group cursor-pointer justify-between p-3 gap-4 border-1px border-white/0 hover:border-white/10 transition-all duration-500"
            onClick={() => item.link && openLink(item.link)}
          >
            <CardContent className="px-0">
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-md h-48 object-cover"
                loading="lazy"
              />
            </CardContent>

            <CardHeader className="px-0">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>

              {item.link && (
                <CardAction>
                  <ExternalLink className="text-neutral-900/30 group-hover:text-neutral-900 dark:text-white/20 dark:group-hover:text-white w-5 transition-all duration-300" />
                </CardAction>
              )}
            </CardHeader>

            <CardFooter className="text-white/30 text-xs px-0">
              <div className="flex items-center gap-2">
                <span className="text-white capitalize">{item.category}</span>
                <span className="text-muted">|</span>
                <span>{item.author}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {visibleCount < filteredProjects.length && (
        <Button
          onClick={loadMore}
          className="w-fit mx-auto dark:bg-neutral-950/75 dark:hover:bg-neutral-900/50 border text-white"
        >
          Load More
        </Button>
      )}
    </div>
  );
}
