import SiteView from "@/components/SiteView";
import { sites } from "@/constants/pastWork";
import Section from "./Section";

const PastWork = () => (
  <Section title="Past Works">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
      {sites.map((site, index) => (
        <SiteView key={index} {...site} />
      ))}
    </div>
  </Section>
);

export default PastWork;
