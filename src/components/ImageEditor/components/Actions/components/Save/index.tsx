import { FC } from 'react';

import Button from '../../../../../Clickable/Buttons/OriginalButton';
import { useImageEditorContext } from '../../../../common/hooks';

import { SaveProps } from './types';

const Save: FC<SaveProps> = ({ onSave }) => {
	const { color, colorMode } = useImageEditorContext();

	return (
		<Button color={color} colorMode={colorMode} isFullWidth onClick={() => onSave()}>
			Save Image
		</Button>
	);
};

export default Save;
