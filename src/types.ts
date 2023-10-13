export interface BoardType {
  id: string;
  cardNum: number;
  title: string;
  lists: string[];
}

export interface ListType {
  id: string;
  title: string;
  cards: string[];
}

export interface TaskType {
  id: string;
  title: string;
  checked: boolean;
}

export interface CardType {
  id: string;
  title: string;
  description: string;
  comments: string[];
  priority: string;
  taskList: TaskType[];
  cardNum: number;
  files: string[];
  date: {
    createdDate: number;
    endDate: number | null;
  };
  timer: {
    startedTime: null | number;
    duration: number;
  };
}

export interface CommentType {
  id: string;
  pid: string;
  text: string;
}

export type SearchResult = {
  card: CardType;
  list: ListType;
  board: BoardType;
}[];

export interface FileType {
  id: string;
  url: string;
}
