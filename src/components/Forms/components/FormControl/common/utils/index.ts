import memoize from 'micro-memoize';

import type { ThemeFontSize } from '@common/types';

import type { FormControlSize } from '../types';

type GetFormControlFontSizeReturn = Record<'label' | 'description' | 'helper', ThemeFontSize>;

export const getFormControlFontSize = memoize((size: FormControlSize): GetFormControlFontSizeReturn => {
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
});
