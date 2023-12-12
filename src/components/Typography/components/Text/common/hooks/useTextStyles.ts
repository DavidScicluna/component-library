import { __DEFAULT_COLOR__ } from '@common/constants';
import type { Style } from '@common/types';
import { checkColorType } from '@common/utils';

import type { TextProps } from '../types';

type UseTextStylesProps = Pick<TextProps, 'color'>;
type UseTextStylesReturn = Style;

const useTextStyles = (props: UseTextStylesProps): UseTextStylesReturn => {
	const { color = __DEFAULT_COLOR__ } = props;

	return {
		color: checkColorType(color) === 'other' ? color : undefined
	};
};

export default useTextStyles;
