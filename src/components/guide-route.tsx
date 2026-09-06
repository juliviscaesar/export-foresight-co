import { SeoGuide } from "@/components/seo-guide";
import { seoGuides } from "@/lib/seo-guides";

export function GuideRoute({ slug }: { slug: string }) {
  const guide = seoGuides[slug];
  if (!guide) return null;
  return <SeoGuide data={guide} />;
}