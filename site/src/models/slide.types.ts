export type SlideId = number;

export interface ISlide {
  id: SlideId;
  title: string;
  component: string;
}

export type SlidesList = ISlide[];
