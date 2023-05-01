import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { DateObj, Props as DayzedProps, RenderProps as DayzedRenderProps } from 'dayzed';

import { AppColor, Undefinable } from '../../../../../common/types';
import { ButtonProps } from '../../../../Clickable/Buttons/OriginalButton/common/types';
import { ModalProps } from '../../../../Overlay/Modal/common/types';

export type DatePickerDate = Undefinable<DateObj['date']>;

export type DatePickerVariant = 'single' | 'range';

export type DatePickerRenderButtonProps = Pick<ButtonProps, 'color' | 'colorMode' | 'onClick'>;

type Omitted = 'children' | 'render' | 'selected' | 'onDateSelected';

export type DatePickerProps = Omit<DayzedProps, Omitted> & {
	color?: AppColor;
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
