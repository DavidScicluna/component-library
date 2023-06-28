import { forwardRef, ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { transparentize } from 'color2k';

import { useGetColor } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';

import { BackdropOverlayProps, BackdropOverlayRef } from './common/types';

const BackdropOverlay = forwardRef<BackdropOverlayRef, BackdropOverlayProps>(function BackdropOverlay(
	props,
	ref
): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const { color = defaultColor, colorMode = defaultColorMode, ...rest } = props;

	const background = useGetColor({ color, colorMode, type: colorMode === 'light' ? 'darker' : 'lighter' });

	return (
		<Box
			ref={ref}
			data-aria-hidden='true'
			aria-hidden='true'
			background={transparentize(background, 0.75)}
			{...rest}
		/>
	);
});

export default BackdropOverlay;
