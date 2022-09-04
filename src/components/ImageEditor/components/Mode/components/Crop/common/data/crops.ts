import { ModeButton } from '../../../../types';
import { ImageEditorModeCropID, ImageEditorModeCropValue } from '../../../../../../types';

const crops: ModeButton<ImageEditorModeCropID, ImageEditorModeCropValue>[] = [
	{
		id: 'square',
		value: '1:1',
		title: 'Square',
		icon: 'crop_square'
	},
	{
		id: 'din',
		value: '1:1.41421',
		title: 'DIN',
		icon: 'crop_din'
	},
	{
		id: '3:2',
		value: '3:2',
		title: '3:2',
		icon: 'crop_3_2'
	},
	{
		id: '4:3',
		value: '4:3',
		title: '4:3',
		icon: 'crop_landscape'
	},
	{
		id: '5:4',
		value: '5:4',
		title: '5:4',
		icon: 'crop_5_4'
	},
	{
		id: '7:5',
		value: '7:5',
		title: '7:5',
		icon: 'crop_7_5'
	},
	{
		id: '16:9',
		value: '16:9',
		title: '16:9',
		icon: 'crop_16_9'
	}
];

export default crops;
