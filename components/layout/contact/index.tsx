import StickySection from "@/components/sticky-section";
import Contacts from "./contacts";

export default function Contact() {
  return (
    <StickySection
      title="Ready to Collaborate?"
      desc={
        <>
          Have an idea you want to build? We’d love to talk about it. Whether
          you’re starting small or planning <br /> something big, we’re here to
          help make it real.
        </>
      }
      className="relative"
      id="contact"
    >
      <Contacts />
    </StickySection>
  );
}
