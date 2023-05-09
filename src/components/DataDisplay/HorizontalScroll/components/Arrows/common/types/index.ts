import { Nullable } from '../../../../../../../common/types';
import { HorizontalScrollAPIContext, HorizontalScrollProps } from '../../../../common/types';

export type ArrowsProps = Pick<HorizontalScrollProps, 'LeftArrow' | 'RightArrow'> & {
	scroll: HorizontalScrollAPIContext;
};

export type ArrowsRef = Nullable<HTMLDivElement>;
