import { FC } from 'react';

import { ColorMode, useColorMode, Link as CUILink } from '@chakra-ui/react';

import { isString, merge } from 'lodash';

import { useTheme } from '../../../../common/hooks';
import useStyles from '../common/styles';
import { LinkProps as ExternalProps } from '../common/types';

const External: FC<ExternalProps> = (props) => {
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
			aria-disabled={isDisabled}
			isExternal
			onClick={isDisabled ? (event) => event.preventDefault() : undefined}
			sx={{ ...merge(style, sx || {}) }}
		>
			{children}
		</CUILink>
	);
};

export default External;
