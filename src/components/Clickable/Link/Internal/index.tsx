import { FC } from 'react';

import { Link as RRDLink } from 'react-router-dom';

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

import { InternalProps } from './types';

const Internal: FC<InternalProps> = (props) => {
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
			as={RRDLink}
			aria-disabled={isDisabled}
			sx={merge(style.link, sx)}
			_disabled={style.disabled}
		>
			{children}
		</CUILink>
	);
};

export default Internal;
