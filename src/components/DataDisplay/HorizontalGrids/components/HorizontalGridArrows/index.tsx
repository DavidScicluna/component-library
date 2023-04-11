import { FC } from 'react';

import ButtonGroup from '../../../../Clickable/ButtonGroup';
import ButtonGroupItem from '../../../../Clickable/ButtonGroup/components/ButtonGroupItem';

import HorizontalGridArrow from './components/HorizontalGridArrow';
import { HorizontalGridArrowsProps } from './types';

const HorizontalGridArrows: FC<HorizontalGridArrowsProps> = (props) => {
	const { isLeftDisabled, isRightDisabled, onLeftClick, onRightClick, arrowProps = {} } = props;

	return (
		<ButtonGroup isAttached spacing={1}>
			<ButtonGroupItem index={0} total={1}>
				<HorizontalGridArrow
					{...arrowProps}
					direction='left'
					isDisabled={isLeftDisabled}
					onClick={onLeftClick}
				/>
			</ButtonGroupItem>
			<ButtonGroupItem index={1} total={1}>
				<HorizontalGridArrow
					{...arrowProps}
					direction='right'
					isDisabled={isRightDisabled}
					onClick={onRightClick}
				/>
			</ButtonGroupItem>
		</ButtonGroup>
	);
};

export default HorizontalGridArrows;
