import type { ElementType, ReactElement } from 'react';
import { forwardRef, useEffect } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useBoolean } from '@common/hooks';

import { Fade } from '@components/Animation';
import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import { __DEFAULT_IMAGE_FILTERS__, __DEFAULT_IMAGE_OPTIONS__ } from './common/constants';
import { useImageClasses } from './common/hooks';
import {
	__KEYS_IMAGE_BORING_CLASS__,
	__KEYS_IMAGE_CLASS__,
	__KEYS_IMAGE_FALLBACK_CLASS__,
	__KEYS_IMAGE_FULL_CLASS__,
	__KEYS_IMAGE_THUMBNAIL_CLASS__
} from './common/keys';
import type { ImageProps, ImageRef, ImageSyntheticEvent } from './common/types';

const Image = forwardRef(function Image<Element extends ElementType>(
	props: ImageProps<Element>,
	ref: ImageRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		boring,
		thumbnail,
		full,
		filters = __DEFAULT_IMAGE_FILTERS__,
		options = __DEFAULT_IMAGE_OPTIONS__,
		radius = __DEFAULT_RADIUS__,
		...rest
	} = props;

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
		<Grid<Element>
			{...rest}
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
				<Fade w='100%' h='100%' in={!isBoringVisible && !isThumbnailVisible && !isFullVisible}>
					<Box w='100%' h='100%' className={classNames(__KEYS_IMAGE_FALLBACK_CLASS__, classes.fallback)} />
				</Fade>
			</GridItem>

			{boring && boring.src ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Fade w='100%' h='100%' in={isBoringVisible}>
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
					</Fade>
				</GridItem>
			) : null}

			{thumbnail && thumbnail.src ? (
				<GridItem columnStart={1} rowStart={1} zIndex={2}>
					<Fade w='100%' h='100%' in={isThumbnailVisible}>
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
					</Fade>
				</GridItem>
			) : null}

			{full && full.src ? (
				<GridItem columnStart={1} rowStart={1} zIndex={3}>
					<Fade w='100%' h='100%' in={isFullVisible}>
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
					</Fade>
				</GridItem>
			) : null}
		</Grid>
	);
});

Image.displayName = 'Image';

export default Image;
