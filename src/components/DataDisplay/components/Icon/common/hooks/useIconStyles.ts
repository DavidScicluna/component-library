import { useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';
import { checkFontSizeType } from '@common/utils';

import { __DEFAULT_ICON_SIZE__ } from '../constants';
import type { IconDefaultElement, IconElement, IconProps, IconSize } from '../types';

type UseIconStylesProps<Element extends IconElement = IconDefaultElement> = Pick<IconProps<Element>, 'size'>;
type UseIconStylesReturn = Style;

const useIconStyles = <Element extends IconElement = IconDefaultElement>(
	props: UseIconStylesProps<Element>
): UseIconStylesReturn => {
	const { size: s = __DEFAULT_ICON_SIZE__ } = props;

	const size = useGetResponsiveValue<IconSize>(s);

	return {
		fontSize: checkFontSizeType(size) === 'other' ? size : undefined
	};
};

export default useIconStyles;
