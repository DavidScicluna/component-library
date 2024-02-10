import { forwardRef, useEffect } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import { Box } from '@components/Box';
import type { GridProps } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_IMAGE_BORING__,
	__DEFAULT_IMAGE_FILTERS__,
	__DEFAULT_IMAGE_FULL__,
	__DEFAULT_IMAGE_OPTIONS__,
	__DEFAULT_IMAGE_THUMBNAIL__
} from './common/constants';
import { useImageClasses, useImageResponsiveValues } from './common/hooks';
import {
	__KEYS_IMAGE_BORING_CLASS__,
	__KEYS_IMAGE_CLASS__,
	__KEYS_IMAGE_FALLBACK_CLASS__,
	__KEYS_IMAGE_FULL_CLASS__,
	__KEYS_IMAGE_THUMBNAIL_CLASS__
} from './common/keys';
import type { ImageProps, ImageRef, ImageSyntheticEvent } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Image = forwardRef(function Image<Element extends PolymorphicElementType>(
	props: ImageProps<Element>,
	ref: ImageRef<Element>
): JSX.Element {
	const {
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		boring: boringProp = __DEFAULT_IMAGE_BORING__,
		thumbnail: thumbnailProp = __DEFAULT_IMAGE_THUMBNAIL__,
		full: fullProp = __DEFAULT_IMAGE_FULL__,
		filters: filtersProp = __DEFAULT_IMAGE_FILTERS__,
		options: optionsProp = __DEFAULT_IMAGE_OPTIONS__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		...rest
	} = props;

	const { boring, thumbnail, full, filters, options, radius } = useImageResponsiveValues<Element>({
		boring: boringProp,
		thumbnail: thumbnailProp,
		full: fullProp,
		filters: filtersProp,
		options: optionsProp,
		radius: radiusProp
	});

	const [isBoringVisible, setIsBoringVisible] = useBoolean();
	const [isThumbnailVisible, setIsThumbnailVisible] = useBoolean();
	const [isFullVisible, setIsFullVisible] = useBoolean();

	const classes = useImageClasses<Element>({ color, colorMode, filters, options, radius });

	const handleOnBoringLoad = (event: ImageSyntheticEvent): void => {
		setIsThumbnailVisible.off();
		setIsFullVisible.off();

		if (boring && boring.onLoad) {
			boring.onLoad(event);
		}
	};

	const handleOnBoringError = (event: ImageSyntheticEvent): void => {
		setIsBoringVisible.off();
		setIsThumbnailVisible.off();
		setIsFullVisible.off();

		if (boring && boring.onError) {
			boring.onError(event);
		}
	};

	const handleOnThumbnailLoad = (event: ImageSyntheticEvent): void => {
		setIsFullVisible.on();

		if (thumbnail && thumbnail.onLoad) {
			thumbnail.onLoad(event);
		}
	};

	const handleOnThumbnailError = (event: ImageSyntheticEvent): void => {
		setIsBoringVisible.on();
		setIsThumbnailVisible.off();
		setIsFullVisible.off();

		if (thumbnail && thumbnail.onError) {
			thumbnail.onError(event);
		}
	};

	const handleOnFullLoad = (event: ImageSyntheticEvent): void => {
		setIsBoringVisible.off();
		setIsThumbnailVisible.off();

		if (full && full.onLoad) {
			full.onLoad(event);
		}
	};

	const handleOnFullError = (event: ImageSyntheticEvent): void => {
		setIsBoringVisible.on();
		setIsThumbnailVisible.off();
		setIsFullVisible.off();

		if (full && full.onError) {
			full.onError(event);
		}
	};

	const handleCheckModeVisibility = (): void => {
		if (thumbnail && thumbnail.src) {
			setIsThumbnailVisible.on();
		} else if (full && full.src) {
			setIsFullVisible.on();
		} else if (boring && boring.src) {
			setIsBoringVisible.on();
		}
	};

	useEffect(() => handleCheckModeVisibility(), [full, thumbnail, boring]);

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_IMAGE_CLASS__, classes.container, { [className]: !!className })}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem columnStart={1} rowStart={1}>
				<Transition
					w='100%'
					h='100%'
					transition='fade'
					in={!isBoringVisible && !isThumbnailVisible && !isFullVisible}
				>
					<Box w='100%' h='100%' className={classNames(__KEYS_IMAGE_FALLBACK_CLASS__, classes.fallback)} />
				</Transition>
			</GridItem>

			{boring && boring.src ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Transition w='100%' h='100%' transition='fade' in={isBoringVisible}>
						<Box
							as='img'
							className={classNames(__KEYS_IMAGE_BORING_CLASS__, classes.image)}
							w='100%'
							h='100%'
							alt={boring.alt}
							onLoad={handleOnBoringLoad}
							onError={handleOnBoringError}
							src={boring.src}
						/>
					</Transition>
				</GridItem>
			) : null}

			{thumbnail && thumbnail.src ? (
				<GridItem columnStart={1} rowStart={1} zIndex={2}>
					<Transition w='100%' h='100%' transition='fade' in={isThumbnailVisible}>
						<Box
							as='img'
							className={classNames(__KEYS_IMAGE_THUMBNAIL_CLASS__, classes.image)}
							w='100%'
							h='100%'
							alt={thumbnail.alt}
							onLoad={handleOnThumbnailLoad}
							onError={handleOnThumbnailError}
							src={thumbnail.src}
						/>
					</Transition>
				</GridItem>
			) : null}

			{full && full.src ? (
				<GridItem columnStart={1} rowStart={1} zIndex={3}>
					<Transition w='100%' h='100%' transition='fade' in={isFullVisible}>
						<Box
							as='img'
							className={classNames(__KEYS_IMAGE_FULL_CLASS__, classes.image)}
							w='100%'
							h='100%'
							alt={full.alt}
							onLoad={handleOnFullLoad}
							onError={handleOnFullError}
							src={full.src}
						/>
					</Transition>
				</GridItem>
			) : null}
		</Grid>
	);
});

// Image.displayName = 'Image';

export default Image;
