import { forwardRef, Fragment,ReactElement } from 'react';

import { Tooltip as CUITooltip,useColorMode } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../common/hooks';
import { checkIsTouchDevice, convertStringToNumber } from '../../../common/utils';

import {
	arrowSize as defaultArrowSize,
	color as defaultColor,
	colorMode as defaultColorMode,
	gutter as defaultGutter
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { TooltipProps,TooltipRef } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

const Tooltip = forwardRef<TooltipRef, TooltipProps>(function Tooltip(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		arrowSize = defaultArrowSize,
		color = defaultColor,
		colorMode = colorModeHook,
		closeDelay = convertStringToNumber(theme.transition.duration.slow, 'ms') || 500,
		openDelay = convertStringToNumber(theme.transition.duration.normal, 'ms') || 250,
		gutter = defaultGutter,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode });

	return !isTouchDevice ? (
		<CUITooltip
			{...rest}
			ref={ref}
			arrowSize={arrowSize}
			closeDelay={closeDelay}
			openDelay={openDelay}
			hasArrow
			gutter={gutter}
			sx={merge(style.tooltip, sx)}
		>
			{children}
		</CUITooltip>
	) : (
		<Fragment>{children}</Fragment>
	);
});

export default Tooltip;
