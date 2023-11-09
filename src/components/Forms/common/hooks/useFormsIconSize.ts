import { useMemo } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import { getFontSizeHeight } from '@common/utils';

import type { IconProps } from '@components/DataDisplay';

import {
	__DEFAULT_FORMS_IS_COMPACT__,
	__DEFAULT_FORMS_LINE_HEIGHT_SIZE__,
	__DEFAULT_FORMS_SIZE__,
	__DEFAULT_FORMS_VARIANT__
} from '../constants';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '../types';

import { useFormsSizeConfig } from '.';

type FormsIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;

type UseFormsIconSizeProps = Pick<FormsCommonProps, 'isCompact' | 'size' | 'variant'>;
type UseFormsIconSizeReturn = FormsIconSize;

const useFormsIconSize = (props: UseFormsIconSizeProps): UseFormsIconSizeReturn => {
	const {
		isCompact: compact = __DEFAULT_FORMS_IS_COMPACT__,
		size: s = __DEFAULT_FORMS_SIZE__,
		variant: v = __DEFAULT_FORMS_VARIANT__
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(compact);

	const size = useGetResponsiveValue<FormsCommonSize>(s);
	const variant = useGetResponsiveValue<FormsCommonVariant>(v);

	const config = useFormsSizeConfig({ isCompact, size, variant });
	const iconSize = useMemo<number>(() => {
		return getFontSizeHeight(config.fontSize, __DEFAULT_FORMS_LINE_HEIGHT_SIZE__);
	}, [config.fontSize]);

	return { w: `${iconSize}px`, h: `${iconSize}px`, size: `${iconSize}px` };
};

export default useFormsIconSize;
