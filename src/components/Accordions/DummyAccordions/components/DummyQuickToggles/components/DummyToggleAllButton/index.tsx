import { ReactElement } from 'react';

import DummyButton from '../../../../../../Clickable/Buttons/DummyButton';
import { useDummyAccordionsContext } from '../../../../common/hooks';
import { size as defaultSize } from '../../common/default/props';

import { DummyToggleAllButtonProps } from './common/types';

const DummyToggleAllButton = (props: DummyToggleAllButtonProps): ReactElement => {
	const { color: defaultColor, colorMode } = useDummyAccordionsContext();

	const { color = defaultColor, size = defaultSize } = props;

	return (
		<DummyButton color={color} colorMode={colorMode} size={size} variant='text'>
			Close all
		</DummyButton>
	);
};

export default DummyToggleAllButton;
