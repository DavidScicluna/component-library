import { forwardRef, ReactElement } from 'react';

import { Tooltip as CUITooltip } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { useTheme } from '../../../common/hooks';
import { checkIsTouchDevice, convertStringToNumber } from '../../../common/utils';
import { useProviderContext } from '../../Provider/common/hooks';

import { arrowSize as defaultArrowSize, gutter as defaultGutter } from './common/default/props';
import useStyles from './common/styles';
import { TooltipProps, TooltipRef } from './common/types';

const isTouchDevice: boolean = checkIsTouchDevice();

const Tooltip = forwardRef<TooltipRef, TooltipProps>(function Tooltip(props, ref): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		arrowSize = defaultArrowSize,
		color = defaultColor,
		colorMode = defaultColorMode,
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
		<>{children}</>
	);
});

export default Tooltip;
