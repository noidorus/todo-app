import { CommentType } from '../../types';

const commentToNode = (comment: CommentType): Node => {
  return { ...comment, children: [] };
};

const selectCommentsMap = (comments: CommentType[]) => {
  return comments.reduce(
    (comments, comment) => comments.set(comment.id, commentToNode(comment)),
    new Map<string, Node>()
  );
};

const recursiveUpdate = (updated: Node, nestedMap: Map<string, Node>) => {
  const recur = (updated: Node): void => {
    nestedMap.set(updated.id, updated);
    if (updated.id === 'root') {
      return;
    }
    const parent = nestedMap.get(updated.pid);
    const newParent: Node = {
      ...parent!,
      children: parent!.children.map((child) =>
        child.id === updated.id ? updated : child
      ),
    };
    return recur(newParent);
  };
  return recur(updated);
};

const addNewComment = (comment: CommentType, nestedMap: Map<string, Node>) => {
  const commentNode = commentToNode(comment);
  nestedMap.set(comment.id, commentNode);
  const parent = nestedMap.get(comment.pid);

  const updatedParent: Node = {
    ...parent!,
    children: [commentNode, ...parent!.children],
  };
  recursiveUpdate(updatedParent, nestedMap);
};

export const selectGroupedComments = (comments: CommentType[]) => {
  const currentMap = selectCommentsMap(comments);
  const nestedMap = new Map<string, Node>([
    ['root', { id: 'root', pid: 'root', children: [], text: 'This is a root' }],
  ]);
  [...currentMap.entries()].forEach(([id, comment]) => {
    if (!nestedMap.get(id)) {
      addNewComment(comment, nestedMap);
    }
  });
  return nestedMap.get('root')?.children;
};

export interface Node extends CommentType {
  children: Node[];
}
