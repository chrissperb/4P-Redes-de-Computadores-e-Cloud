export type SlideId = number;

export interface BilingualText {
  pt: string;
  en: string;
}

export interface ISlide {
  id: SlideId;
  title: BilingualText;
  component: string;
}

export type SlidesList = ISlide[];
