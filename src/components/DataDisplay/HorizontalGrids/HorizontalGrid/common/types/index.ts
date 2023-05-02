import { CardProps } from '../../../../../Cards/OriginalCard/common/types';
import { HorizontalScrollAPIContext } from '../../../../../HorizontalScroll/common/types';
import { CommonHorizontalGridProps } from '../../../common/types';

export type HorizontalGridProps = Omit<CardProps, 'color' | 'colorMode'> & CommonHorizontalGridProps;

export type HorizontalGridContext = Pick<HorizontalGridProps, 'color' | 'colorMode' | 'spacing'> & {
	scroll: HorizontalScrollAPIContext;
	onSetScroll: (scroll: HorizontalScrollAPIContext) => void;
};
