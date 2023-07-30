import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { transparentize } from 'color2k';

import { useGetColor } from '@common/hooks';

import Box from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { __DEFAULT_GLASS_BLUR__, __DEFAULT_GLASS_HAS_BACKGROUND__ } from './common/constants';
import { useGetGlassClasses } from './common/hooks';
import type { GlassProps, GlassRef } from './common/types';

const Glass = forwardRef(function Glass<Element extends ElementType>(
	props: GlassProps<Element>,
	ref: GlassRef<Element>
): ReactElement {
	const {
		children,
		color,
		colorMode,
		blur = __DEFAULT_GLASS_BLUR__,
		hasBackground = __DEFAULT_GLASS_HAS_BACKGROUND__,
		...rest
	} = props;

	const background = useGetColor({ color, colorMode, colorType: color ? 'color' : 'default', hueType: 'background' });

	const classes = useGetGlassClasses<Element>({ blur });

	return (
		<Grid<Element>
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
					className={classes}
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
