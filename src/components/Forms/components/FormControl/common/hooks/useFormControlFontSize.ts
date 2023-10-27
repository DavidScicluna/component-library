import type { ElementType } from 'react';
import { useMemo } from 'react';

import type { PolymorphicDefaultElement, ThemeFontSize } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import { __DEFAULT_FORM_CONTROL_SIZE__ } from '../constants';
import type { FormControlProps, FormControlSize } from '../types';

type UseFormControlFontSize = Record<'label' | 'description' | 'helper', ThemeFontSize>;

type UseFormControlFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	FormControlProps<Element>,
	'size'
>;
type UseFormControlFontSizeReturn = UseFormControlFontSize;

const useFormControlFontSize = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseFormControlFontSizeProps<Element>
): UseFormControlFontSizeReturn => {
	const { size = __DEFAULT_FORM_CONTROL_SIZE__ } = props;

	const fontSize = useMemo<UseFormControlFontSize>(() => {
		const s = getResponsiveValue<FormControlSize>(size);

		switch (s) {
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
