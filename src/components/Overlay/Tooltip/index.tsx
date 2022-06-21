import { ReactElement, forwardRef } from 'react';

import { useColorMode, Tooltip as CUITooltip } from '@chakra-ui/react';

import { merge } from 'lodash';

import { color as defaultColor, colorMode as defaultColorMode } from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { TooltipRef, TooltipProps } from './types';

import { useTheme } from '../../../common/hooks';
import { checkIsTouchDevice, convertStringToNumber } from '../../../common/utils';

const isTouchDevice: boolean = checkIsTouchDevice();

const Tooltip = forwardRef<TooltipRef, TooltipProps>(function Tooltip(props, ref): ReactElement {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		closeDelay = convertStringToNumber(theme.transition.duration.slow, 'ms') || 500,
		openDelay = convertStringToNumber(theme.transition.duration.normal, 'ms') || 250,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode });

	return (
		<>
			{!isTouchDevice ? (
				<CUITooltip
					{...rest}
					ref={ref}
					arrowSize={8}
					closeDelay={closeDelay}
					openDelay={openDelay}
					hasArrow
					sx={merge(style.tooltip, sx)}
				>
					{children}
				</CUITooltip>
			) : (
				children
			)}
		</>
	);
});

export default Tooltip;
