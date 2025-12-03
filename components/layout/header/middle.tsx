import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";

interface Props {
  active: boolean;
}

// 🔹 NAV ITEMS ARRAY
const navItems = [
  { label: "Who we are", id: "who-we-are" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Tech Stack", id: "tech-stack" },
  { label: "Team", id: "team" },
  { label: "Contact", id: "contact" },
];

export default function Middle({ active }: Props) {
  const itemClass =
    "cursor-pointer justify-center h-[50px] lg:h-fit w-full lg:w-fit whitespace-nowrap bg-transparent hover:bg-neutral-900 dark:hover:bg-neutral-900/70 rounded-full transition-all px-4 py-1 transition-colors duration-500 ease-in-out hover:text-white";

  return (
    <NavigationMenu
      className={clsx(
        "lg:min-w-fit bg-white-800/10 dark:border border-neutral-800/50 transition-all duration-300 rounded-md lg:rounded-full p-1 backdrop-blur-lg absolute left-1/2 -translate-x-1/2 lg:-translate-y-1/2 top-[52px] lg:top-1/2",
        active &&
          "h-[calc(100dvh-65px)] lg:h-auto bg-white/90 lg:bg-white/0 border border-neutral-100 lg:border-neutral-100/0 dark:bg-neutral-800/50 lg:dark:bg-neutral-800/0 dark:border-neutral-800/0 w-[calc(100vw-35px)] lg:w-fit lg:max-w-[calc(100%-15px)] backdrop-blur-md lg:backdrop-blur-none "
      )}
    >
      <NavigationMenuList
        className={clsx(
          "h-[calc(100dvh-65px)] lg:mt-auto lg:h-auto flex-col justify-start lg:flex-row w-[calc(100vw-35px)] lg:w-fit",
          active ? "mt-7" : "mt-4"
        )}
      >
        {navItems.map(({ label, id }) => (
          <NavigationMenuItem key={id} className="w-full lg:w-fit">
            <NavigationMenuLink asChild className={itemClass}>
              <a href={`#${id}`} className="px-8 lg:px-4">
                {label}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
