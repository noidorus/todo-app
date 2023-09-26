export interface BoardType {
  id: string;
  title: string;
  lists: string[];
  // tasks: number[];
}

export type ListType = {
  id: string;
  title: string;
  todos: string[];
};

// export interface Todo {
//   title: string;
//   description: string;
//   // comments: []
// }
