import classNames from 'classnames';

export const CommentsBadge = ({ comments }: CommentsBadgeProps) => {
  const classes = classNames({
    badge: true,
    'comments-badge': true,
  });

  return (
    <>
      {!!comments.length && <span className={classes}>{comments.length}</span>}
    </>
  );
};

interface CommentsBadgeProps {
  comments: string[];
}
