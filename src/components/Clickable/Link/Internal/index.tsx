import { FC } from 'react';

import { ColorMode, useColorMode, Link as CUILink } from '@chakra-ui/react';

import { isString, merge } from 'lodash';
import { Link as RRDLink } from 'react-router-dom';

import { InternalProps } from './types';

import { useTheme } from '../../../../common/hooks';
import useStyles from '../common/styles';

const Internal: FC<InternalProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook } = useColorMode();

	const {
		children,
		color = 'gray',
		colorMode: colorModeProp,
		isDisabled = false,
		isFullWidth = false,
		sx,
		...rest
	} = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	const style = useStyles(theme, { color, colorMode, isFullWidth, isString: isString(children) });

	console.log(props);

	return (
		<CUILink
			{...rest}
			as={RRDLink}
			aria-disabled={isDisabled}
			onClick={isDisabled ? (event) => event.preventDefault() : undefined}
			sx={{ ...merge(style.link, sx || {}) }}
			_disabled={{ ...merge(style.disabled, sx || {}) }}
		>
			{children}
		</CUILink>
	);
};

export default Internal;
