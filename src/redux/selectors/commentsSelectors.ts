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

const recursiveUpdate = (
  updated: Node,
  nestedMap: Map<string, Node>,
  rootId: string
) => {
  const recur = (updated: Node): void => {
    nestedMap.set(updated.id, updated);
    if (updated.id === rootId) {
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

const addNewComment = (
  comment: Node,
  nestedMap: Map<string, Node>,
  rootId: string
) => {
  nestedMap.set(comment.id, comment);
  const parent = nestedMap.get(comment.pid);
  // debugger;
  const updatedParent: Node = {
    ...parent!,
    children: [comment, ...parent!.children],
  };

  recursiveUpdate(updatedParent, nestedMap, rootId);
};

export const selectGroupedComments = (
  comments: CommentType[],
  rootId: string
) => {
  const currentMap = selectCommentsMap(comments);
  const nestedMap = new Map<string, Node>([
    [rootId, { id: rootId, pid: rootId, children: [], text: 'This is a root' }],
  ]);

  [...currentMap.entries()].forEach(([id, comment]) => {
    if (!nestedMap.get(id)) {
      addNewComment(comment, nestedMap, rootId);
    }
  });
  return nestedMap.get(rootId)?.children;
};

export interface Node extends CommentType {
  children: Node[];
}
