import { useMemo } from 'react';

import type { ThemeFontSize } from '@common/types';

import { DEFAULT_FORM_CONTROL_SIZE } from '../constants';
import type { FormControlElement, FormControlProps } from '../types';

import useFormControlResponsiveValues from './useFormControlResponsiveValues';

type UseFormControlFontSize = Record<'label' | 'description' | 'helper', ThemeFontSize>;

type UseFormControlFontSizeProps<Element extends FormControlElement> = Pick<FormControlProps<Element>, 'size'>;
type UseFormControlFontSizeReturn = UseFormControlFontSize;

const useFormControlFontSize = <Element extends FormControlElement>(
	props: UseFormControlFontSizeProps<Element>
): UseFormControlFontSizeReturn => {
	const { size: sizeProp = DEFAULT_FORM_CONTROL_SIZE } = props;

	const { size } = useFormControlResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<UseFormControlFontSize>(() => {
		switch (size) {
			case 'xs':
				return {
					label: 'md',
					description: 'xs',
					helper: 'xs'
				};
			case 'sm':
				return {
					label: 'md',
					description: 'xs',
					helper: 'xs'
				};
			case 'lg':
				return {
					label: 'xl',
					description: 'md',
					helper: 'md'
				};
			case 'xl':
				return {
					label: 'xl',
					description: 'md',
					helper: 'md'
				};
			default:
				return {
					label: 'lg',
					description: 'sm',
					helper: 'sm'
				};
		}
	}, [size]);

	return fontSize;
};

export default useFormControlFontSize;
