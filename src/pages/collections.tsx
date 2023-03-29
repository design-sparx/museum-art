import Head from "next/head";
import Wrapper from "@/layout";
import {
  CollectionsSection,
  FeaturesSection,
  HeroSection,
  LinksSection,
} from "@/section/Collections";
import DonationSection from "@/section/shared/Donation";
import SupportSection from "@/section/shared/Support";

export default function Collections() {
  return (
    <>
      <Head>
        <title>Museum Art - Collections</title>
      </Head>
      <Wrapper>
        <HeroSection />
        <FeaturesSection />
        <CollectionsSection />
        <LinksSection />
        <DonationSection />
        <SupportSection />
      </Wrapper>
    </>
  );
}
