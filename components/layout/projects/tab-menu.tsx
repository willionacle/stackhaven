"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabMenu({
  onValueChange,
}: {
  onValueChange: (data: string) => void;
}) {
  const activeClass =
    "data-[state=active]:bg-neutral-900 dark:data-[state=active]:bg-white min-w-[106px] lg:min-w-[100px] dark:data-[state=active]:text-black! data-[state=active]:text-white transition-all duration-500 lg:px-10 dark:hover:text-white!";

  return (
    <Tabs
      defaultValue="all"
      className="mx-auto w-fit my-10"
      onValueChange={onValueChange}
    >
      <TabsList className="bg-transparent flex-wrap">
        <TabsTrigger className={activeClass} value="all">
          All
        </TabsTrigger>
        <TabsTrigger className={activeClass} value="design">
          Design
        </TabsTrigger>
        <TabsTrigger className={activeClass} value="development">
          Development
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
