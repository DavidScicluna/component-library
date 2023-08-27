import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { __DEFAULT_BACKDROP_OVERLAY_AMOUNT__, __DEFAULT_BACKDROP_OVERLAY_BLUR__ } from './common/constants';
import { useBackdropOverlayClasses, useBackdropOverlayStyles } from './common/hooks';
import type {
	BackdropOverlayDefaultElement,
	BackdropOverlayElement,
	BackdropOverlayProps,
	BackdropOverlayRef
} from './common/types';

const BackdropOverlay = forwardRef(function BackdropOverlay<
	Element extends BackdropOverlayElement = BackdropOverlayDefaultElement
>(props: BackdropOverlayProps<Element>, ref: BackdropOverlayRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		amount = __DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
		blur = __DEFAULT_BACKDROP_OVERLAY_BLUR__,
		...rest
	} = props;

	const classes = useBackdropOverlayClasses<Element>({ blur });
	const styles = useBackdropOverlayStyles<Element>({ color, colorMode, amount });

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
			<GridItem columnStart={1} rowStart={1}>
				<Box className={classes} w='100%' h='100%' sx={styles} />
			</GridItem>

			{children ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					{children}
				</GridItem>
			) : null}
		</Grid>
	);
});

export default BackdropOverlay;
