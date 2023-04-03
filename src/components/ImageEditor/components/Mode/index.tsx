/* eslint-disable import/namespace */
import { FC } from 'react';

import {
	cropID as defaultCropID,
	cropValue as defaultCropValue,
	rotation as defaultRotation
} from '../../common/data/defaultPropValues';
import { useImageEditorContext } from '../../common/hooks';

import Crop from './components/Crop';
import Rotate from './components/Rotate';
import { ModeProps } from './types';

const Mode: FC<ModeProps> = (props) => {
	const { mode } = useImageEditorContext();

	const {
		cropID = defaultCropID,
		cropValue = defaultCropValue,
		rotation = defaultRotation,
		onCrop,
		onRotate
	} = props;

	switch (mode) {
		case 'crop':
			return <Crop cropID={cropID} cropValue={cropValue} onCrop={onCrop} />;
		case 'rotate':
			return <Rotate rotation={rotation} onRotate={onRotate} />;
	}
};

export default Mode;
