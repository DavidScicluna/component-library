import { FC } from 'react';

import Button from '../../../../../Clickable/Buttons/OriginalButton';
import { useImageEditorContext } from '../../../../common/hooks';

import { CancelProps } from './common/types';

const Cancel: FC<CancelProps> = ({ onCancel }) => {
	const { colorMode } = useImageEditorContext();

	return (
		<Button colorMode={colorMode} isFullWidth onClick={() => onCancel()} variant='outlined'>
			Cancel
		</Button>
	);
};

export default Cancel;
