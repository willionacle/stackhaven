"use client";
import StickySection from "@/components/sticky-section";
import Cards from "./cards";
import TabMenu from "./tab-menu";
import { useState } from "react";

export default function Projects() {
  const [tab, setTab] = useState<string>("all");
  return (
    <>
      <StickySection
        title="Projects"
        desc={
          <>
            Selected Work, Crafted with purpose. Here are a few projects
            <br />
            that showcase our approach and precision.
          </>
        }
        id="projects"
      >
        <TabMenu onValueChange={setTab} />
        <Cards category={tab} />
      </StickySection>
    </>
  );
}
