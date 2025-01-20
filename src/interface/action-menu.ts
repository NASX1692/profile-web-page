export enum Menu {
  ABOUT = 'About',
  EDUCATION = 'Education',
  EXPERIENCE = 'Experience',
}

export interface IMenu {
  name: string;
  display: string;
  url?: string;
}

export interface ISection {
  tital: string;
  sectionId: string;
}

export type ActionMenu =
  | Menu.ABOUT
  | Menu.EDUCATION
  | Menu.EXPERIENCE;
