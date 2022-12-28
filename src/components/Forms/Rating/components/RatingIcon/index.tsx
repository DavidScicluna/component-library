import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
import { merge } from 'lodash';

import Icon from '../../../../Icon';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	isReadOnly as defaultIsReadOnly,
	size as defaultSize
} from '../../common/data/defaultPropValues';
import { useTheme } from '../../../../../common/hooks';

import { isActive as defaultIsActive, isHovering as defaultIsHovering } from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { RatingIconProps } from './types';

const RatingIcon: FC<RatingIconProps> = (props) => {
	const theme = useTheme();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		icons,
		isActive = defaultIsActive,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isHovering = defaultIsHovering,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		isReadOnly = defaultIsReadOnly,
		size = defaultSize,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isError, isHovering, isWarning, isSuccess, size });

	return (
		<Center
			{...rest}
			data-active={dataAttr(isActive)}
			aria-disabled={isDisabled}
			aria-invalid={isError}
			aria-readonly={isReadOnly}
			sx={merge(style.rating, sx || {})}
			_active={style.active}
			_disabled={style.disabled}
			_readOnly={style.readOnly}
		>
			<Icon icon={isActive ? icons?.active || 'star' : icons?.default || 'star_outline'} category='outlined' />
		</Center>
	);
};

export default RatingIcon;
