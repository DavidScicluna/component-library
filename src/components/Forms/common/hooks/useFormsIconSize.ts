import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import type { IconDefaultElement, IconProps } from '@components/DataDisplay';

import {
	DEFAULT_FORMS_IS_COMPACT,
	DEFAULT_FORMS_LINE_HEIGHT_SIZE,
	DEFAULT_FORMS_SIZE,
	DEFAULT_FORMS_VARIANT
} from '../constants';
import type { FormsUniqueProps } from '../types';

import useFormsResponsiveValues from './useFormsResponsiveValues';
import { useFormsSizeConfig } from '.';

type FormsIconSize = Pick<IconProps<IconDefaultElement>, 'w' | 'h' | 'size'>;

type UseFormsIconSizeProps = Pick<FormsUniqueProps, 'isCompact' | 'size' | 'variant'>;
type UseFormsIconSizeReturn = FormsIconSize;

const useFormsIconSize = (props: UseFormsIconSizeProps): UseFormsIconSizeReturn => {
	const {
		isCompact: isCompactProp = DEFAULT_FORMS_IS_COMPACT,
		size: sizeProp = DEFAULT_FORMS_SIZE,
		variant: variantProp = DEFAULT_FORMS_VARIANT
	} = props;

	const { isCompact, size, variant } = useFormsResponsiveValues({
		isCompact: isCompactProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useFormsSizeConfig({ isCompact, size, variant });
	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, DEFAULT_FORMS_LINE_HEIGHT_SIZE);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useFormsIconSize;
