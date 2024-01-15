import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import type { IconProps } from '@components/DataDisplay';

import {
	__DEFAULT_FORMS_IS_COMPACT__,
	__DEFAULT_FORMS_LINE_HEIGHT_SIZE__,
	__DEFAULT_FORMS_SIZE__,
	__DEFAULT_FORMS_VARIANT__
} from '../constants';
import type { FormsCommonProps } from '../types';

import useFormsResponsiveValues from './useFormsResponsiveValues';
import { useFormsSizeConfig } from '.';

type FormsIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;

type UseFormsIconSizeProps = Pick<FormsCommonProps, 'isCompact' | 'size' | 'variant'>;
type UseFormsIconSizeReturn = FormsIconSize;

const useFormsIconSize = (props: UseFormsIconSizeProps): UseFormsIconSizeReturn => {
	const {
		isCompact: isCompactProp = __DEFAULT_FORMS_IS_COMPACT__,
		size: sizeProp = __DEFAULT_FORMS_SIZE__,
		variant: variantProp = __DEFAULT_FORMS_VARIANT__
	} = props;

	const { isCompact, size, variant } = useFormsResponsiveValues({
		isCompact: isCompactProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useFormsSizeConfig({ isCompact, size, variant });
	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, __DEFAULT_FORMS_LINE_HEIGHT_SIZE__);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useFormsIconSize;
