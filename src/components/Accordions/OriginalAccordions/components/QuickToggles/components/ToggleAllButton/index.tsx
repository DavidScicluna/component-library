import { ReactElement } from 'react';

import Button from '../../../../../../Clickable/Buttons/OriginalButton';
import { isDisabled as defaultIsDisabled } from '../../../../common/default/props';
import { useAccordionsContext } from '../../../../common/hooks';
import { toggleAllAccordions } from '../../../../common/utils';
import { size as defaultSize } from '../../common/default/props';

import { ToggleAllButtonProps } from './common/types';

const ToggleAllButton = <D,>(props: ToggleAllButtonProps<D>): ReactElement => {
	const { accordions, color: defaultColor, colorMode, opened, onSetOpened } = useAccordionsContext<D>();

	const { color = defaultColor, isDisabled = defaultIsDisabled, size = defaultSize, ...rest } = props;

	const handleClick = () => {
		if (typeof onSetOpened === 'function') {
			onSetOpened(toggleAllAccordions({ accordions, opened: opened.length }));
		}
	};

	return (
		<Button
			{...rest}
			color={color}
			colorMode={colorMode}
			isDisabled={isDisabled}
			onClick={handleClick}
			size={size}
			variant='monochrome'
		>
			{accordions.length === opened.length ? 'Close all' : 'Open all'}
		</Button>
	);
};

export default ToggleAllButton;
