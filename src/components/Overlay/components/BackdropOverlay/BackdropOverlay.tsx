import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { transparentize } from 'color2k';
import { merge } from 'lodash-es';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import Box from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { __DEFAULT_BACKDROP_OVERLAY_AMOUNT__ } from './common/constants';
import type { BackdropOverlayProps, BackdropOverlayRef } from './common/types';

const BackdropOverlay = forwardRef(function BackdropOverlay<Element extends ElementType>(
	props: BackdropOverlayProps<Element>,
	ref: BackdropOverlayRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		amount = __DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
		sx,
		...rest
	} = props;

	const background = useGetColor({ color, colorMode, colorType: color ? 'color' : 'default', hueType: 'background' });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-backdrop-overlay`, { [className]: !!className })}
			data-aria-hidden='true'
			aria-hidden='true'
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem rowStart={1} columnStart={1}>
				<Box
					className={classNames('w-full', 'h-full')}
					sx={merge({ background: transparentize(background, amount) }, sx)}
				/>
			</GridItem>

			{children ? (
				<GridItem rowStart={1} columnStart={1} zIndex={1}>
					{children}
				</GridItem>
			) : null}
		</Grid>
	);
});

export default BackdropOverlay;
