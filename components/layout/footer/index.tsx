import Logo from "@/public/images/logo.svg";
import { Mail, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t dark:border-neutral-700 border-dashed dark:bg-neutral-950/80 backdrop-blur-sm mt-20 pt-12 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="shadcn-logo"
                className="w-10 transition-all duration-300"
              />
              <h2 className="text-lg font-bold dark:text-white">StackHaven</h2>
            </div>
            <p className="dark:text-white/60 mt-2 leading-relaxed">
              A small team of builders turning ideas into modern digital
              products — from MVPs to full web and mobile apps.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-3 gap-x-10">
            <a
              href="#hero"
              className="dark:text-white/70 duration-200 dark:hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#who-we-are"
              className="dark:text-white/70 duration-200 dark:hover:text-white transition"
            >
              Who We Are
            </a>
            <a
              href="#services"
              className="dark:text-white/70 duration-200 dark:hover:text-white transition"
            >
              What We Do
            </a>
            <a
              href="#projects"
              className="dark:text-white/70 duration-200 dark:hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#team"
              className="dark:text-white/70 duration-200 dark:hover:text-white transition"
            >
              Team
            </a>
            <a
              href="#contact"
              className="dark:text-white/70 duration-200 dark:hover:text-white transition"
            >
              Contact
            </a>
          </div>

          {/* Contact Section */}
          <div>
            <p className="font-medium mb-2">Contact</p>
            <div className="flex flex-col gap-1">
              <span className="dark:text-white/70  flex gap-2">
                <Mail className="w-5 h-5" /> Email
              </span>
              <a
                href="mailto:stackhaven.dev@gmail.com"
                className="dark:text-white hover:text-blue-400 transition"
              >
                stackhaven.dev@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <span className="dark:text-white/70 flex gap-2">
                <Send className="w-5 h-5" /> Telegram
              </span>
              <a
                href="https://t.me/StackHavenTeam"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white hover:text-blue-400 transition"
              >
                @StackHavenTeam
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 py-6 text-center dark:text-white/40 text-xs">
          By the StackHaven team. © {new Date().getFullYear()} StackHaven. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
