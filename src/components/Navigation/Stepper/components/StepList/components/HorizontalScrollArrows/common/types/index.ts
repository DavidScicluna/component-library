import { ScrollContext, StepListProps } from '../../../../types';

export type HorizontalScrollArrowProps = Pick<StepListProps, 'isDisabled'> & {
	scroll: ScrollContext;
};
