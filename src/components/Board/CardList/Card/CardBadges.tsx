import descIcon from '../../../../assets/images/description-icon.svg';
import { DateBadge } from '../../../Badges/DateBadge/DateBadge';
import { PriorityBadge } from '../../../Badges/PriorityBadge/PriorityBadge';

export const CardBadges = ({
  priority,
  description,
  date,
}: CardBadgesProps) => {
  return (
    <div className="card__badges">
      <DateBadge date={date} />
      {description && <img src={descIcon} width={18} alt="desc-icon" />}
      <PriorityBadge priority={priority} />
    </div>
  );
};

interface CardBadgesProps {
  priority: string;
  description: string;
  date: {
    createdDate: number;
    endDate: number | null;
  };
}