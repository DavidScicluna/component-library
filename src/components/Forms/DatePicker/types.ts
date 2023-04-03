import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { DateObj, Props as DayzedProps, RenderProps as DayzedRenderProps } from 'dayzed';

import { Undefinable } from '../../../common/types';
import { Color } from '../../../theme/types';
import { ButtonProps } from '../../Clickable/Buttons/OriginalButton/types';
import { ModalProps } from '../../Overlay/Modal/types';

export type DatePickerDate = Undefinable<DateObj['date']>;

export type DatePickerColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

export type DatePickerVariant = 'single' | 'range';

export type DatePickerRenderButtonProps = Pick<ButtonProps, 'color' | 'colorMode' | 'onClick'>;

type Omitted = 'children' | 'render' | 'selected' | 'onDateSelected';

export type DatePickerProps = Omit<DayzedProps, Omitted> & {
	color?: DatePickerColor;
	colorMode?: ColorMode;
	renderButton: (props: DatePickerRenderButtonProps) => ReactNode;
	onSetDate: (date: Date) => void;
	format?: string;
	value?: Date;
	variant?: DatePickerVariant;
} & Pick<ModalProps, 'spacing'>;

export type DatePickerContext = Pick<DatePickerProps, 'color' | 'colorMode' | 'format' | 'spacing'> & {
	date: DatePickerDate;
	dayzed?: DayzedRenderProps;
};
