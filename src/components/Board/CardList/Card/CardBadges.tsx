import descIcon from '../../../../assets/images/description-icon.svg';
import { PriorityBadge } from '../../../Badges/PriorityBadge';

export const CardBadges = ({ priority, description }: CardBadgesProps) => {
  return (
    <div className="card__badges">
      <PriorityBadge priority={priority} />
      {description && <img src={descIcon} width={18} alt="desc-icon" />}
    </div>
  );
};

interface CardBadgesProps {
  priority: string;
  description: string;
}
