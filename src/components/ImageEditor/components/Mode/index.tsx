/* eslint-disable import/namespace */
import { FC, useContext } from 'react';

import {
	mode as defaultMode,
	cropID as defaultCropID,
	cropValue as defaultCropValue,
	rotation as defaultRotation
} from '../../common/data/defaultPropValues';
import { ImageEditorContext as ImageEditorContextType } from '../../types';
import { ImageEditorContext } from '../..';

import Rotate from './components/Rotate';
import Crop from './components/Crop';
import { ModeProps } from './types';

const Mode: FC<ModeProps> = (props) => {
	const { mode = defaultMode } = useContext<ImageEditorContextType>(ImageEditorContext);

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
