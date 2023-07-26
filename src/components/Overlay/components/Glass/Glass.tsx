import { forwardRef, ReactElement } from 'react';

import classNames from 'classnames';
import { transparentize } from 'color2k';

import { useGetClass, useGetColor } from '@common/hooks';
import type { Saturate } from '@common/types/classes';

import Box from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { __DEFAULT_GLASS_BLUR__, __DEFAULT_GLASS_HAS_BACKGROUND__ } from './common/constants';
import type { GlassBlur, GlassProps, GlassRef } from './common/types';

const Glass = forwardRef<GlassRef, GlassProps>(function Glass(props, ref): ReactElement {
	const {
		children,
		color,
		colorMode,
		blur = __DEFAULT_GLASS_BLUR__,
		hasBackground = __DEFAULT_GLASS_HAS_BACKGROUND__,
		...rest
	} = props;

	const background = useGetColor({ color, colorMode, colorType: color ? 'color' : 'default', hueType: 'background' });

	const backdropBlurClassName = useGetClass<GlassBlur>(blur, ['filters', 'backdropBlur']);
	const saturateClassName = useGetClass<Saturate>(100, ['filters', 'saturate']);

	return (
		<Grid
			{...rest}
			ref={ref}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem rowStart={1} columnStart={1} zIndex={1}>
				<Box
					className={classNames('w-full', 'h-full', backdropBlurClassName, saturateClassName)}
					sx={hasBackground ? { background: transparentize(background, 0.5) } : undefined}
				/>
			</GridItem>

			<GridItem rowStart={1} columnStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

export default Glass;
