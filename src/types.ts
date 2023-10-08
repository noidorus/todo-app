export interface BoardType {
  id: string;
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
  date: {
    createdDate: number;
    endDate: number | null;
  };
  timer: {
    startedTime: null | number;
    duration: number;
  };
}
