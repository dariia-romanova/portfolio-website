import type { SchemeColors } from "@src/utils.tsx/colorScemes";

export interface HeroContentProps {
  title: string;
  subtitle: string;
  prevUrl: string;
  nextUrl: string;
  bgColor: SchemeColors;
}