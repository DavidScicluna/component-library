import { ElementType, forwardRef, ReactElement } from 'react';

import { transparentize } from 'color2k';
import { merge } from 'lodash-es';

import { useGetColor } from '../../../common/hooks';
import Box from '../../Box';
import { useProviderContext } from '../../Provider/common/hooks';

import type { BackdropOverlayProps, BackdropOverlayRef } from './common/types';

const BackdropOverlay = forwardRef(function BackdropOverlay<Element extends ElementType>(
	props: BackdropOverlayProps<Element>,
	ref: BackdropOverlayRef<Element>
): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const { color = defaultColor, colorMode = defaultColorMode, style, ...rest } = props;

	const background = useGetColor({
		color,
		colorMode,
		colorType: 'color',
		hueType: colorMode === 'light' ? 'darker' : 'lighter'
	});

	return (
		<Box
			{...(rest as BackdropOverlayProps<Element>)}
			ref={ref}
			data-aria-hidden='true'
			aria-hidden='true'
			style={merge({ background: transparentize(background, 0.75) }, style)}
		/>
	);
});

export default BackdropOverlay;
