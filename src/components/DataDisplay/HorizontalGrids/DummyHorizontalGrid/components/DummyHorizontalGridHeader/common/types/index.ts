import { DummyCardHeaderProps } from '../../../../../../../DataDisplay/Cards/DummyCard/components/DummyCardHeader/common/types';
import { DummyHorizontalGridArrowsProps } from '../../../../../components/DummyHorizontalGridArrows/common/types';

export type DummyHorizontalGridHeaderProps = Pick<DummyHorizontalGridArrowsProps, 'dummyArrowProps'> &
	DummyCardHeaderProps;
