import Wrapper from "@/layout";
import HeroSection from "@/section/Visit/Hero";
import Head from "next/head";
import WelcomeSection from "@/section/Visit/Welcome";
import FeaturesSection from "@/section/Visit/Features";
import EventsSection from "@/section/shared/Events";
import DonationSection from "@/section/shared/Donation";
import FaqsSection from "@/section/shared/Faqs";
import SupportSection from "@/section/shared/Support";
import AccessibilitySection from "@/section/Visit/Accessibility";
import FacilitiesSection from "@/section/Visit/Facilities";

export default function Visit() {
  return (
    <>
      <Head>
        <title>Museum Art - Visit</title>
      </Head>
      <Wrapper>
        <HeroSection />
        <WelcomeSection />
        <FeaturesSection />
        <DonationSection />
        <EventsSection />
        <SupportSection />
        <AccessibilitySection />
        <FacilitiesSection />
        <FaqsSection />
      </Wrapper>
    </>
  );
}
