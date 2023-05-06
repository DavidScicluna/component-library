import { Icon as IconType } from '../../../../../../common/types/icons';
import { ImageEditorModeCropID, ImageEditorModeCropValue } from '../../../../common/types';

export type ModeButton<I, V> = {
	id: I;
	value: V;
	title: string;
	icon: IconType;
};

export type OnCropProps = {
	id: ImageEditorModeCropID;
	value: ImageEditorModeCropValue;
};

export type OnRotateProps = {
	deg: number;
};

export type ModeProps = {
	cropID: ImageEditorModeCropID;
	cropValue: ImageEditorModeCropValue;
	rotation: number;
	onCrop: (props: OnCropProps) => void;
	onRotate: (props: OnRotateProps) => void;
};
