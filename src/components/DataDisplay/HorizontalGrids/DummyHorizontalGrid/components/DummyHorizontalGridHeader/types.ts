import { DummyCardHeaderProps } from '../../../../../Cards/DummyCard/components/DummyCardHeader/types';
import { DummyHorizontalGridArrowsProps } from '../../../components/DummyHorizontalGridArrows/types';

export type DummyHorizontalGridHeaderProps = Pick<DummyHorizontalGridArrowsProps, 'dummyArrowProps'> &
	DummyCardHeaderProps;
