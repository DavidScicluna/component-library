import { FC, isValidElement } from 'react';

import { useColorMode, Link as CUILink } from '@chakra-ui/react';

import { merge } from 'lodash';
import { Link as RRDLink } from 'react-router-dom';

import { InternalProps } from './types';

import { useTheme } from '../../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth
} from '../common/data/defaultPropValues';
import useStyles from '../common/styles';

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

	const style = useStyles({ theme, color, colorMode, isFullWidth, isString: isValidElement(children) });

	return (
		<CUILink
			{...rest}
			as={RRDLink}
			aria-disabled={isDisabled}
			sx={merge(style.link, sx)}
			_disabled={merge(style.disabled, sx)}
		>
			{children}
		</CUILink>
	);
};

export default Internal;
