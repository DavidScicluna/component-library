import { forwardRef, useEffect } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_RADIUS } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicElementType, PolymorphicSyntheticEvent } from '@common/types';

import { Transition } from '@components/Animation';
import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_IMAGE_BORING,
	DEFAULT_IMAGE_FILTERS,
	DEFAULT_IMAGE_FULL,
	DEFAULT_IMAGE_OPTIONS,
	DEFAULT_IMAGE_THUMBNAIL
} from './common/constants';
import { useImageClasses, useImageResponsiveValues } from './common/hooks';
import {
	KEYS_IMAGE_BORING_CLASS,
	KEYS_IMAGE_CLASS,
	KEYS_IMAGE_FALLBACK_CLASS,
	KEYS_IMAGE_FULL_CLASS,
	KEYS_IMAGE_THUMBNAIL_CLASS
} from './common/keys';
import type { ImageProps, ImageRef } from './common/types';

const Image = forwardRef(function Image<Element extends PolymorphicElementType>(
	props: ImageProps<Element>,
	ref: ImageRef<Element>
): JSX.Element {
	const {
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		boring: boringProp = DEFAULT_IMAGE_BORING,
		thumbnail: thumbnailProp = DEFAULT_IMAGE_THUMBNAIL,
		full: fullProp = DEFAULT_IMAGE_FULL,
		filters: filtersProp = DEFAULT_IMAGE_FILTERS,
		options: optionsProp = DEFAULT_IMAGE_OPTIONS,
		radius: radiusProp = DEFAULT_RADIUS,
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

	const handleOnBoringLoad = (event: PolymorphicSyntheticEvent): void => {
		setIsThumbnailVisible.off();
		setIsFullVisible.off();

		if (boring && boring.onLoad) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			boring.onLoad(event as any);
		}
	};

	const handleOnBoringError = (event: PolymorphicSyntheticEvent): void => {
		setIsBoringVisible.off();
		setIsThumbnailVisible.off();
		setIsFullVisible.off();

		if (boring && boring.onError) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			boring.onError(event as any);
		}
	};

	const handleOnThumbnailLoad = (event: PolymorphicSyntheticEvent): void => {
		setIsFullVisible.on();

		if (thumbnail && thumbnail.onLoad) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			thumbnail.onLoad(event as any);
		}
	};

	const handleOnThumbnailError = (event: PolymorphicSyntheticEvent): void => {
		setIsBoringVisible.on();
		setIsThumbnailVisible.off();
		setIsFullVisible.off();

		if (thumbnail && thumbnail.onError) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			thumbnail.onError(event as any);
		}
	};

	const handleOnFullLoad = (event: PolymorphicSyntheticEvent): void => {
		setIsBoringVisible.off();
		setIsThumbnailVisible.off();

		if (full && full.onLoad) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			full.onLoad(event as any);
		}
	};

	const handleOnFullError = (event: PolymorphicSyntheticEvent): void => {
		setIsBoringVisible.on();
		setIsThumbnailVisible.off();
		setIsFullVisible.off();

		if (full && full.onError) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			full.onError(event as any);
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
			{...rest}
			ref={ref}
			className={classNames(KEYS_IMAGE_CLASS, classes.container, { [className]: !!className })}
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
					<Box w='100%' h='100%' className={classNames(KEYS_IMAGE_FALLBACK_CLASS, classes.fallback)} />
				</Transition>
			</GridItem>

			{boring && boring.src ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Transition w='100%' h='100%' transition='fade' in={isBoringVisible}>
						<Box
							as='img'
							className={classNames(KEYS_IMAGE_BORING_CLASS, classes.image)}
							alt={boring.alt}
							onLoad={handleOnBoringLoad}
							onError={handleOnBoringError}
							src={boring.src}
							sx={{ w: '100%', h: '100%' }}
						/>
					</Transition>
				</GridItem>
			) : null}

			{thumbnail && thumbnail.src ? (
				<GridItem columnStart={1} rowStart={1} zIndex={2}>
					<Transition w='100%' h='100%' transition='fade' in={isThumbnailVisible}>
						<Box
							as='img'
							className={classNames(KEYS_IMAGE_THUMBNAIL_CLASS, classes.image)}
							alt={thumbnail.alt}
							onLoad={handleOnThumbnailLoad}
							onError={handleOnThumbnailError}
							src={thumbnail.src}
							sx={{ w: '100%', h: '100%' }}
						/>
					</Transition>
				</GridItem>
			) : null}

			{full && full.src ? (
				<GridItem columnStart={1} rowStart={1} zIndex={3}>
					<Transition w='100%' h='100%' transition='fade' in={isFullVisible}>
						<Box
							as='img'
							className={classNames(KEYS_IMAGE_FULL_CLASS, classes.image)}
							alt={full.alt}
							onLoad={handleOnFullLoad}
							onError={handleOnFullError}
							src={full.src}
							sx={{ w: '100%', h: '100%' }}
						/>
					</Transition>
				</GridItem>
			) : null}
		</Grid>
	);
});

// Image.displayName = 'Image';

export default Image;
