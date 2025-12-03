import StickySection from "@/components/sticky-section";
import Cards from "./cards";
import Bg from "./bg";

export default function Team() {
  return (
    <StickySection
      title="Meet Our Team"
      desc={
        <>
          The people behind StackHaven — a small group of developers and
          designers united <br /> by a shared passion for building great digital
          products.
        </>
      }
      className="max-w-[calc(100vw-35px)] lg:max-w-full! relative"
      id="team"
    >
      <div className="max-w-[calc(100vw-35px)] lg:max-w-7xl mx-auto">
        <Cards />
      </div>
      <Bg />
    </StickySection>
  );
}
