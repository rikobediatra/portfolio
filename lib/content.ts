import enPortfolio from "@/content/en/portfolio.json";
import idPortfolio from "@/content/id/portfolio.json";
import { Locale, PortfolioContent } from "@/lib/types";

const contentMap: Record<Locale, PortfolioContent> = {
  id: idPortfolio as PortfolioContent,
  en: enPortfolio as PortfolioContent
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return contentMap[locale];
}
