import { CardProps } from '../../../../../Cards/OriginalCard/types';
import { CommonHorizontalGridProps } from '../../../common/types';

export type DummyHorizontalGridProps = Omit<CardProps, 'color' | 'colorMode'> & CommonHorizontalGridProps;

export type DummyHorizontalGridContext = Pick<DummyHorizontalGridProps, 'color' | 'colorMode' | 'spacing'>;
