export const FilesBadge = ({ files }: FilesBadgeProps) => {
  return (
    <>
      {!!files.length && (
        <span className="badge files-badge">{files.length}</span>
      )}
    </>
  );
};

interface FilesBadgeProps {
  files: string[];
}
