import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { __DEFAULT_BACKGROUND_IMAGE_FILTERS__, __DEFAULT_BACKGROUND_IMAGE_OPTIONS__ } from './common/constants';
import { useBackgroundImageClasses } from './common/hooks';
import { __KEYS_BACKGROUND_IMAGE_CLASS__, __KEYS_BACKGROUND_IMAGE_IMAGE_CLASS__ } from './common/keys';
import type { BackgroundImageProps, BackgroundImageRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const BackgroundImage = forwardRef(function BackgroundImage<Element extends ElementType = PolymorphicDefaultElement>(
	props: BackgroundImageProps<Element>,
	ref: BackgroundImageRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		filters = __DEFAULT_BACKGROUND_IMAGE_FILTERS__,
		options = __DEFAULT_BACKGROUND_IMAGE_OPTIONS__,
		radius = __DEFAULT_RADIUS__,
		src,
		...rest
	} = props;

	const classes = useBackgroundImageClasses<Element>({ filters, options, radius });

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

export default BackgroundImage;
