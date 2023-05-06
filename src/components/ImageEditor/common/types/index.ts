import { ColorMode } from '@chakra-ui/react';

import { AppColor } from '../../../../common/types';

export type ImageEditorMode = 'crop' | 'rotate';

export type ImageEditorModeCropID = 'square' | 'din' | '3:2' | '4:3' | '5:4' | '7:5' | '16:9';
export type ImageEditorModeCropValue =
	| '1:1'
	| '1:1.41421'
	| '3:2'
	| '4:3'
	| '5:4'
	| '7:5'
	| '16:9'
	| '1.41421:1'
	| '2:3'
	| '3:4'
	| '3:5'
	| '5:7'
	| '9:16';

export type ImageEditorProps = {
	color?: AppColor;
	colorMode?: ColorMode;
	title: string;
	image: string;
	isOpen: boolean;
	onCrop: (image: string) => void;
	onClose: () => void;
};

export type ImageEditorContext = Pick<ImageEditorProps, 'color' | 'colorMode'> & {
	mode: ImageEditorMode;
	zoom: number;
};
