import Head from "next/head";
import CarouselEventsSection from "@/section/shared/CarouselEvents";
import InfoSection from "@/section/Home/Info";
import VisitSection from "@/section/Home/Visit";
import HeroSection from "@/section/Home/Hero";
import DonationSection from "@/section/shared/Donation";
import DiscoverSection from "@/section/Home/Discover";
import SupportSection from "@/section/shared/Support";
import { AnimatedBox, Wrapper } from "@/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Museum Art</title>
        <meta name="description" content="Museum art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <HeroSection />
        <AnimatedBox>
          <InfoSection />
        </AnimatedBox>
        <AnimatedBox>
          <CarouselEventsSection />
        </AnimatedBox>
        <AnimatedBox>
          <VisitSection />
        </AnimatedBox>
        <DonationSection />
        <AnimatedBox>
          <DiscoverSection />
        </AnimatedBox>
        <AnimatedBox>
          <SupportSection />
        </AnimatedBox>
      </Wrapper>
    </>
  );
}
