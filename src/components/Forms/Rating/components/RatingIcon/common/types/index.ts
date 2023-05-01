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
	| 'isRequired'
	| 'isReadOnly'
	| 'isFullWidth'
	| 'size';

export type RatingIconProps = Pick<RatingProps, Picked> & {
	isActive?: boolean;
	isHovering?: boolean;
} & Pick<CenterProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'sx'>;
