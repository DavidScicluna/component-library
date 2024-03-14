import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_RADIUS } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_BACKGROUND_IMAGE_FILTERS,
	DEFAULT_BACKGROUND_IMAGE_OPTIONS,
	DEFAULT_BACKGROUND_IMAGE_SRC
} from './common/constants';
import { useBackgroundImageClasses, useBackgroundImageResponsiveValues } from './common/hooks';
import { KEYS_BACKGROUND_IMAGE_CLASS, KEYS_BACKGROUND_IMAGE_IMAGE_CLASS } from './common/keys';
import type { BackgroundImageProps, BackgroundImageRef } from './common/types';

const BackgroundImage = forwardRef(function BackgroundImage<Element extends PolymorphicElementType>(
	props: BackgroundImageProps<Element>,
	ref: BackgroundImageRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		filters: filtersProp = DEFAULT_BACKGROUND_IMAGE_FILTERS,
		options: optionsProp = DEFAULT_BACKGROUND_IMAGE_OPTIONS,
		radius: radiusProp = DEFAULT_RADIUS,
		src: srcProp = DEFAULT_BACKGROUND_IMAGE_SRC,
		...rest
	} = props;

	const { filters, options, radius, src } = useBackgroundImageResponsiveValues<Element>({
		filters: filtersProp,
		options: optionsProp,
		radius: radiusProp,
		src: srcProp
	});

	const classes = useBackgroundImageClasses<Element>({ filters, options, radius });

	return (
		<Grid
			{...rest}
			ref={ref}
			className={classNames(KEYS_BACKGROUND_IMAGE_CLASS, classes.container, { [className]: !!className })}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				{children}
			</GridItem>

			<GridItem columnStart={1} rowStart={1}>
				<Box
					className={classNames(KEYS_BACKGROUND_IMAGE_IMAGE_CLASS, classes.image)}
					w='100%'
					h='100%'
					sx={{ backgroundImage: `url(${src})` }}
				/>
			</GridItem>
		</Grid>
	);
});

// BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
