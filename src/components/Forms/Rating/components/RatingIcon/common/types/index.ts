import { CenterProps } from '@chakra-ui/react';

import { RatingProps } from '../../../../common/types';

type Picked =
	| 'color'
	| 'colorMode'
	| 'icons'
	| 'isDisabled'
	| 'isError'
	| 'isWarning'
	| 'isSuccess'
	| 'isReadOnly'
	| 'isRequired'
	| 'size';

export type RatingIconProps = Pick<RatingProps, Picked> & {
	isActive?: boolean;
	isHovering?: boolean;
} & Pick<CenterProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'>;
