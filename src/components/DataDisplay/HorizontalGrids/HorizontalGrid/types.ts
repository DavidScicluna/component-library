import { CardProps } from '../../../Cards/OriginalCard/types';
import { HorizontalScrollAPIContext } from '../../../HorizontalScroll/types';
import { CommonHorizontalGridProps } from '../common/types';

export type HorizontalGridProps = Omit<CardProps, 'color' | 'colorMode'> & CommonHorizontalGridProps;

export type HorizontalGridContext = Pick<HorizontalGridProps, 'color' | 'colorMode'> & {
	scroll: HorizontalScrollAPIContext;
	onSetScroll: (scroll: HorizontalScrollAPIContext) => void;
};
