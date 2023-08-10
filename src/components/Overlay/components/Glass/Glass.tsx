import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { transparentize } from 'color2k';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_GLASS_BLUR__,
	__DEFAULT_GLASS_HAS_BACKGROUND__,
	__DEFAULT_GLASS_IS_BACKDROP__
} from './common/constants';
import { useGetGlassClasses } from './common/hooks';
import type { GlassProps, GlassRef } from './common/types';

const Glass = forwardRef(function Glass<Element extends ElementType>(
	props: GlassProps<Element>,
	ref: GlassRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		blur = __DEFAULT_GLASS_BLUR__,
		isBackdrop = __DEFAULT_GLASS_IS_BACKDROP__,
		hasBackground = __DEFAULT_GLASS_HAS_BACKGROUND__,
		...rest
	} = props;

	const background = useGetColor({ color, colorMode, colorType: color ? 'color' : 'default', hueType: 'background' });

	const classes = useGetGlassClasses<Element>({ blur, isBackdrop });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-glass`, { [className]: !!className })}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				<Box
					className={classes}
					sx={hasBackground ? { background: transparentize(background, 0.5) } : undefined}
				/>
			</GridItem>

			<GridItem columnStart={1} rowStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

export default Glass;
