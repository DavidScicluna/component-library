import { HorizontalGridArrowProps } from './components/HorizontalGridArrow/types';

export type HorizontalGridArrowsProps = {
	isLeftDisabled: boolean;
	isRightDisabled: boolean;
	onLeftClick: () => void;
	onRightClick: () => void;
	arrowProps?: Omit<HorizontalGridArrowProps, 'direction' | 'isDisabled' | 'onClick'>;
};
