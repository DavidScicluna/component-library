import { FC, useContext } from 'react';

import Button from '../../../../../Clickable/Buttons/OriginalButton';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { ImageEditorContext as ImageEditorContextType } from '../../../../types';
import { ImageEditorContext } from '../../../..';

import { SaveProps } from './types';

const Save: FC<SaveProps> = ({ onSave }) => {
	const { color = defaultColor, colorMode = defaultColorMode } =
		useContext<ImageEditorContextType>(ImageEditorContext);

	return (
		<Button color={color} colorMode={colorMode} isFullWidth onClick={() => onSave()}>
			Save Image
		</Button>
	);
};

export default Save;
