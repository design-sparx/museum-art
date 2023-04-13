import Head from "next/head";
import { AnimatedBox, Wrapper } from "@/layout";
import HeroSection from "@/section/Exhibitions/Hero";
import EventsSection from "@/section/Exhibitions/Events";
import CarouselEventsSection from "@/section/shared/CarouselEvents";
import SupportSection from "@/section/shared/Support";

export default function Exhibitions() {
  return (
    <>
      <Head>
        <title>Museum Art - Exhibitions</title>
      </Head>
      <Wrapper>
        <HeroSection />
        <AnimatedBox>
          <EventsSection />
        </AnimatedBox>
        <AnimatedBox>
          <CarouselEventsSection title="Online Exhibitions" />
        </AnimatedBox>
        <AnimatedBox>
          <SupportSection />
        </AnimatedBox>
      </Wrapper>
    </>
  );
}
