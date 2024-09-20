export interface TextSection {
  type: string;
  text: string[];
}

export interface LocationProp {
  location: number;
  name: string;
  data: {
    index: number;
    section: {
      text?: TextSection;
      condition?: {
        name?: string;
        section?: string;
        text?: TextSection;
      }[];
    }[];
  }[];
}
