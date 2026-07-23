import ServiceLanding from "@/components/ServiceLanding";
import { landings } from "@/lib/landing";

const cfg = landings["sanayi-tipi-bulasik-makinesi-servisi"];

export const metadata = {
  title: cfg.metaTitle,
  description: cfg.metaDescription,
  alternates: { canonical: cfg.path },
};

export default function Page() {
  return <ServiceLanding cfg={cfg} />;
}
