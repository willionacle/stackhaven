import WhoWeAre from "../layout/who-we-are";
import Header from "../layout/header";
import Hero from "../layout/hero";
import MouseFollower from "../layout/mouse-follower";
import WhatWeDo from "../layout/what-we-do";
import Projects from "../layout/projects";
import Stack from "../layout/stack";
import Team from "../layout/team";
import Contact from "../layout/contact";
import Footer from "../layout/footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <Projects />
        <Stack />
        <Team />
        <Contact />
        <Footer />
        <MouseFollower size={200}>
          <div className="w-full hidden lg:block h-full rounded-full bg-cyan-400/0 dark:bg-cyan-800 border blur-3xl" />
        </MouseFollower>
      </main>
    </>
  );
}
