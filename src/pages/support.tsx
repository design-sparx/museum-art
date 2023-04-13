import { AnimatedBox, Wrapper } from "@/layout";
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
        <AnimatedBox>
          <InfoSection />
        </AnimatedBox>
        <AnimatedBox>
          <SupportSection />
        </AnimatedBox>
        <AnimatedBox>
          <LinksSection />
        </AnimatedBox>
      </Wrapper>
    </>
  );
}
