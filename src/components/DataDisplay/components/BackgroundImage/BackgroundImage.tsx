import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_BACKGROUND_IMAGE_FILTERS__,
	__DEFAULT_BACKGROUND_IMAGE_OPTIONS__,
	__DEFAULT_BACKGROUND_IMAGE_SRC__
} from './common/constants';
import { useBackgroundImageClasses, useBackgroundImageResponsiveValues } from './common/hooks';
import { __KEYS_BACKGROUND_IMAGE_CLASS__, __KEYS_BACKGROUND_IMAGE_IMAGE_CLASS__ } from './common/keys';
import type { BackgroundImageProps, BackgroundImageRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const BackgroundImage: PolymorphicComponentWithRef = forwardRef(function BackgroundImage<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: BackgroundImageProps<Element>, ref: BackgroundImageRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		filters: filtersProp = __DEFAULT_BACKGROUND_IMAGE_FILTERS__,
		options: optionsProp = __DEFAULT_BACKGROUND_IMAGE_OPTIONS__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		src: srcProp = __DEFAULT_BACKGROUND_IMAGE_SRC__,
		...rest
	} = props;

	const { filters, options, radius, src } = useBackgroundImageResponsiveValues({
		filters: filtersProp,
		options: optionsProp,
		radius: radiusProp,
		src: srcProp
	});

	const classes = useBackgroundImageClasses({ filters, options, radius });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_BACKGROUND_IMAGE_CLASS__, classes.container, { [className]: !!className })}
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
					className={classNames(__KEYS_BACKGROUND_IMAGE_IMAGE_CLASS__, classes.image)}
					w='100%'
					h='100%'
					sx={{ backgroundImage: `url(${src})` }}
				/>
			</GridItem>
		</Grid>
	);
});

BackgroundImage.displayName = 'BackgroundImage';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <BackgroundImage<Element> {...props} />;
