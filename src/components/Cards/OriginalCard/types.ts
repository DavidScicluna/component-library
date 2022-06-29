import { CommonCardProps } from '../common/types';

export type CardRef = HTMLDivElement | null;

export type CardProps = {
	isActive?: boolean;
	isDisabled?: boolean;
	isClickable?: boolean;
} & CommonCardProps;

export type CardContext = Pick<CardProps, 'color' | 'colorMode' | 'isDisabled' | 'isLight' | 'spacing'>;
