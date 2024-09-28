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
      multiCondition?: {
        name: string;
        conditions: {
          name?: string;
          section?: string;
        }[];
      }[];
      choose?: {
        name?: string;
        values: {
          name?: string;
          text?: TextSection[];
        }[];
      };
    }[];
  }[];
}
