export interface BoardType {
  id: string;
  title: string;
  lists: string[];
}

export type ListType = {
  id: string;
  title: string;
  cards: string[];
};

export interface CardType {
  id: string;
  title: string;
  description: string;
  comments: string[];
  priority: string;
  date: {
    createdDate: number;
    endDate: number | null;
  };
}
