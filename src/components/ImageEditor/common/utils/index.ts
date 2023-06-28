// eslint-disable-next-line import/no-unresolved
import { Area } from 'react-easy-crop/types';

import memoize from 'micro-memoize';

// import memoize  from 'micro-memoize';

// import { ImageEditorModeCropValue } from '../../types';
// import { cropValue as defaultCropValue } from '../data/defaultPropValues';

// type OnFormatCropValueProps = {
// 	base: { width: number; height: number };
// 	type: 'width' | 'height';
// 	value: ImageEditorModeCropValue;
// };

// export const onFormatCropValue = memoize((props: OnFormatCropValueProps): number => {
// 	const { base, type, value = defaultCropValue } = props;
// 	const { width: baseWidth, height: baseHeight } = base;

// 	const split = (value || '').split(':');
// 	const rWidth = Number(split[0]) || 0; // Ratio Width
// 	const rHeight = Number(split[1]) || 0; // Ratio Height

// 	switch (type) {
// 		case 'width':
// 			// return rWidth && rHeight ? (baseHeight * rWidth) / rHeight : baseWidth;
// 			return rWidth && rHeight ? (baseHeight / rHeight) * rWidth : baseWidth;
// 		case 'height':
// 			// return rWidth && rHeight ? (baseWidth * rHeight) / rWidth : baseHeight;
// 			return rWidth && rHeight ? (baseWidth / rWidth) * rHeight : baseHeight;
// 	}
// });

const createImage = memoize(
	(url: string): Promise<HTMLImageElement> =>
		new Promise((resolve, reject) => {
			const image = new Image();
			image.addEventListener('load', () => resolve(image));
			image.addEventListener('error', (error) => reject(error));
			image.src = url;
		})
);

const getRadianAngle = memoize((rotation: number): number => (rotation * Math.PI) / 180);

type GetBase64ImageProps = {
	src: string;
	area: Area;
	rotation: number;
	flip: { horizontal: boolean; vertical: boolean };
};

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export const getBase64Image = memoize(
	async ({ src, area, rotation = 0, flip }: GetBase64ImageProps): Promise<string | null> => {
		const image = await createImage(src);
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		if (!ctx) {
			return null;
		}

		const radius = getRadianAngle(rotation);

		// calculate bounding box of the rotated image
		const bBoxWidth = Math.abs(Math.cos(radius) * image.width) + Math.abs(Math.sin(radius) * image.height);
		const bBoxHeight = Math.abs(Math.sin(radius) * image.width) + Math.abs(Math.cos(radius) * image.height);

		// set canvas size to match the bounding box
		canvas.width = bBoxWidth;
		canvas.height = bBoxHeight;

		// translate canvas context to a central location to allow rotating and flipping around the center
		ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
		ctx.rotate(radius);
		ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
		ctx.translate(-image.width / 2, -image.height / 2);

		// draw rotated image
		ctx.drawImage(image, 0, 0);

		// croppedAreaPixels values are bounding box relative
		// extract the cropped image using these values
		const data = ctx.getImageData(area.x, area.y, area.width, area.height);

		// set canvas width to final desired crop size - this will clear existing context
		canvas.width = area.width;
		canvas.height = area.height;

		// paste generated rotate image at the top left corner
		ctx.putImageData(data, 0, 0);

		// As Base64 string
		return canvas.toDataURL('image/jpeg');

		// As a blob
		// return new Promise((resolve) => {
		// 	canvas.toBlob((file) => {
		// 		if (file) {
		// 			resolve(URL.createObjectURL(file));
		// 		}
		// 	}, 'image/jpeg');
		// });
	}
);
