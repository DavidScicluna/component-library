import { FC, useContext } from 'react';

import { colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { ImageEditorContext as ImageEditorContextType } from '../../../../types';
import { ImageEditorContext } from '../../../..';
import Button from '../../../../../Clickable/Buttons/OriginalButton';

import { CancelProps } from './types';

const Cancel: FC<CancelProps> = ({ onCancel }) => {
	const { colorMode = defaultColorMode } = useContext<ImageEditorContextType>(ImageEditorContext);

	return (
		<Button colorMode={colorMode} isFullWidth onClick={() => onCancel()} variant='outlined'>
			Cancel
		</Button>
	);
};

export default Cancel;
