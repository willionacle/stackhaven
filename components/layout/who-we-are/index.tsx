import StickySection from "@/components/sticky-section";
import TextArea from "./text-area";
import Cards from "./cards";

export default function WhoWeAre() {
  return (
    <>
      <StickySection
        title="Who We Are?"
        id="who-we-are"
        className="pt-0! lg:pt-32!"
      >
        <TextArea />
        <Cards />
      </StickySection>
    </>
  );
}
