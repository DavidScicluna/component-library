import { useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';

import { __DEFAULT_ICON_SIZE__ } from '../constants';
import type { IconDefaultElement, IconElement, IconProps, IconSize } from '../types';
import { checkIconSize } from '../utils';

type UseIconStylesProps<Element extends IconElement = IconDefaultElement> = Pick<IconProps<Element>, 'size'>;
type UseIconStylesReturn = Style;

const useIconStyles = <Element extends IconElement = IconDefaultElement>(
	props: UseIconStylesProps<Element>
): UseIconStylesReturn => {
	const { size: s = __DEFAULT_ICON_SIZE__ } = props;

	const size = useGetResponsiveValue<IconSize>(s);

	return {
		fontSize: checkIconSize(size) === 'other' ? size : undefined
	};
};

export default useIconStyles;
