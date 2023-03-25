import TopNav from "@/components/TopNav";
import { ReactNode } from "react";
import AppFooter from "@/components/AppFooter";
import FooterData from "@/data/footer.json";

interface IProps {
  children: ReactNode;
}

export default function Wrapper({ children }: IProps) {
  return (
    <>
      <TopNav />
      {children}
      <AppFooter data={FooterData.data} />
    </>
  );
}
