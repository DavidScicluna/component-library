import { FC } from 'react';

import ButtonGroup from '../../../../Clickable/ButtonGroup';
import ButtonGroupItem from '../../../../Clickable/ButtonGroup/components/ButtonGroupItem';

import DummyHorizontalGridArrow from './components/DummyHorizontalGridArrow';
import { DummyHorizontalGridArrowsProps } from './types';

const DummyHorizontalGridArrows: FC<DummyHorizontalGridArrowsProps> = ({ dummyArrowProps }) => {
	return (
		<ButtonGroup isAttached spacing={1}>
			<ButtonGroupItem index={0} total={1}>
				<DummyHorizontalGridArrow {...dummyArrowProps} direction='left' />
			</ButtonGroupItem>
			<ButtonGroupItem index={1} total={1}>
				<DummyHorizontalGridArrow {...dummyArrowProps} direction='right' />
			</ButtonGroupItem>
		</ButtonGroup>
	);
};

export default DummyHorizontalGridArrows;
