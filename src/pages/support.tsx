import Wrapper from "@/layout";
import Head from "next/head";
import { HeroSection, InfoSection, LinksSection } from "@/section/Support";
import { SupportSection } from "@/section/shared";

export default function Support() {
  return (
    <>
      <Head>
        <title>Museum Art - Support</title>
      </Head>
      <Wrapper>
        <HeroSection />
        <InfoSection />
        <SupportSection />
        <LinksSection />
      </Wrapper>
    </>
  );
}
