import { FC } from 'react';
import { Link as RRDLink } from 'react-router-dom';

import { Link as CUILink,useColorMode } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../../common/hooks';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFullWidth as defaultIsFullWidth
} from '../common/data/defaultPropValues';
import useStyles from '../common/styles';
import { LinkMouseEvent as InternalMouseEvent } from '../common/types';

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
		onClick,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isFullWidth, isString: typeof children === 'string' });

	const handleClick = (event: InternalMouseEvent): void => {
		if (isDisabled) {
			event.preventDefault();
		}

		if (onClick) {
			onClick;
		}
	};

	return (
		<CUILink
			{...rest}
			as={RRDLink}
			aria-disabled={isDisabled}
			onClick={handleClick}
			sx={merge(style.link, sx)}
			_disabled={style.disabled}
		>
			{children}
		</CUILink>
	);
};

export default Internal;
