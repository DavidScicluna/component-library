import { FC } from 'react';

import { useColorMode, Link as CUILink } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth
} from '../common/data/defaultPropValues';
import useStyles from '../common/styles';
import { LinkProps as ExternalProps } from '../common/types';

const External: FC<ExternalProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		isDisabled = defaultIsDisabled,
		isFullWidth = defaultIsFullWidth,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isFullWidth, isString: typeof children === 'string' });

	return (
		<CUILink
			{...rest}
			aria-disabled={isDisabled}
			isExternal
			sx={merge(style.link, sx)}
			_disabled={merge(style.disabled, sx)}
		>
			{children}
		</CUILink>
	);
};

export default External;
