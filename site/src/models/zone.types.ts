export type ZoneId = 1 | 2 | 3 | 4 | 5 | 6;

export interface IZone {
  id: ZoneId;
  label: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
}
