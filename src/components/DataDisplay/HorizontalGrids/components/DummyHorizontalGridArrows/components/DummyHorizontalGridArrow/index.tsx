import { FC } from 'react';

import DummyIconButton from '../../../../../../Clickable/IconButtons/DummyIconButton';
import IconButtonIcon from '../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import { DummyHorizontalGridArrowProps } from '../../common/types';

const DummyHorizontalGridArrow: FC<DummyHorizontalGridArrowProps> = (props) => {
	const { direction, ...rest } = props;

	return (
		<DummyIconButton {...rest} aria-label={`Scroll ${direction}`}>
			<IconButtonIcon icon={direction === 'left' ? 'arrow_back' : 'arrow_forward'} category='outlined' />
		</DummyIconButton>
	);
};

export default DummyHorizontalGridArrow;
