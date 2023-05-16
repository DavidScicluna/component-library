import { forwardRef, ReactElement, useEffect } from 'react';

import { Center, Image as CUIImage, ImageProps as CUIImageProps } from '@chakra-ui/react';

import fallback from '../../../common/assets/fallback';
import { useBoolean } from '../../../common/hooks';
import { Style } from '../../../common/types';
import Glass from '../../Overlay/Glass';
import { useProviderContext } from '../../Provider/common/hooks';
import Fade from '../../Transitions/Fade';

import { ImageEvent, ImageProps, ImageRef } from './common/types';

const p: CUIImageProps = {
	align: 'center',
	fallbackStrategy: 'onError',
	loading: 'lazy'
};

// TODO: Maybe replace position styling to grid
const Image = forwardRef<ImageRef, ImageProps>(function Image(props, ref): ReactElement {
	const { colorMode: defaultColorMode } = useProviderContext();

	const {
		alt,
		colorMode = defaultColorMode,
		borderRadius = 'base',
		fit = 'cover',
		onError,
		onLoad,
		src,
		...rest
	} = props;
	const { full, thumbnail, boring } = src;

	const [isFullVisible, setIsFullVisible] = useBoolean();
	const [isThumbnailVisible, setIsThumbnailVisible] = useBoolean();
	const [isBoringVisible, setIsBoringVisible] = useBoolean();

	const sx: Style = { width: '100%', height: '100%', position: 'absolute', borderRadius };

	const handleBoringError = (event: ImageEvent): void => {
		setIsBoringVisible.off();

		if (onError) {
			onError(event, 'boring');
		}
	};

	const handleBoringLoad = (event: ImageEvent): void => {
		setIsFullVisible.off();
		setIsThumbnailVisible.off();

		if (onLoad) {
			onLoad(event, 'boring');
		}
	};

	const handleThumbnailError = (event: ImageEvent): void => {
		setIsBoringVisible.on();
		setIsThumbnailVisible.off();

		if (onError) {
			onError(event, 'thumbnail');
		}
	};

	const handleThumbnailLoad = (event: ImageEvent): void => {
		setIsFullVisible.on();

		if (onLoad) {
			onLoad(event, 'thumbnail');
		}
	};

	const handleFullError = (event: ImageEvent): void => {
		setIsBoringVisible.on();
		setIsFullVisible.off();

		if (onError) {
			onError(event, 'full');
		}
	};

	const handleFullLoad = (event: ImageEvent): void => {
		setIsThumbnailVisible.off();

		if (onLoad) {
			onLoad(event, 'full');
		}
	};

	const handleCheckModeVisibility = (): void => {
		if (thumbnail) {
			setIsThumbnailVisible.on();
		} else if (full) {
			setIsFullVisible.on();
		} else if (boring) {
			setIsBoringVisible.on();
		}
	};

	useEffect(() => handleCheckModeVisibility(), [full, thumbnail, boring]);

	return (
		<Center ref={ref} position='relative' sx={{ ...sx }}>
			{/* Fallback image */}
			<Center as={Fade} in={!isFullVisible && !isThumbnailVisible && !isBoringVisible} sx={{ ...sx }}>
				<CUIImage
					{...rest}
					{...p}
					alt={`${alt} fallback image`}
					objectFit={fit}
					src={colorMode === 'light' ? fallback.light : fallback.dark}
					sx={{ ...sx }}
				/>
			</Center>

			{/* Boring image */}
			{boring ? (
				<Center as={Fade} in={isBoringVisible} sx={{ ...sx }}>
					<CUIImage
						{...rest}
						{...p}
						alt={`${alt} boring image`}
						objectFit={fit}
						onError={handleBoringError}
						onLoad={handleBoringLoad}
						src={boring}
						sx={{ ...sx }}
					/>
				</Center>
			) : null}

			{/* Thumbnail image */}
			{thumbnail ? (
				<Center as={Fade} in={isThumbnailVisible} sx={{ ...sx }}>
					<Center sx={{ ...sx, position: 'relative' }}>
						<Glass zIndex={1} sx={{ ...sx }} />
						<CUIImage
							{...rest}
							{...p}
							alt={`${alt} thumbnail image`}
							objectFit={fit}
							onError={handleThumbnailError}
							onLoad={handleThumbnailLoad}
							src={thumbnail}
							sx={{ ...sx }}
						/>
					</Center>
				</Center>
			) : null}

			{/* Full image */}
			{full ? (
				<Center as={Fade} in={isFullVisible} sx={{ ...sx }}>
					<CUIImage
						{...rest}
						{...p}
						alt={alt}
						objectFit={fit}
						onError={handleFullError}
						onLoad={handleFullLoad}
						src={full}
						sx={{ ...sx }}
					/>
				</Center>
			) : null}
		</Center>
	);
});

export default Image;
