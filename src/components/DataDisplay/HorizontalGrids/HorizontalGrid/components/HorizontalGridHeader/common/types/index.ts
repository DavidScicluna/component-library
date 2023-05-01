import { CardHeaderProps } from '../../../../../../../Cards/OriginalCard/components/CardHeader/types';
import { HorizontalGridArrowsProps } from '../../../../../components/HorizontalGridArrows/common/types';

export type HorizontalGridHeaderProps = CardHeaderProps & Pick<HorizontalGridArrowsProps, 'arrowProps'>;
