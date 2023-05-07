import { ReactElement } from 'react';
import { Link } from 'react-scroll';

import { useConst } from '@chakra-ui/react';

import { useTheme } from '../../../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../../common/utils';
import Button from '../../../../../../Clickable/Buttons/OriginalButton';
import { isDisabled as defaultIsDisabled } from '../../../../common/default/props';
import { useAccordionsContext } from '../../../../common/hooks';
import { toggleAccordion } from '../../../../common/utils';
import { size as defaultSize } from '../../common/default/props';

import { AccordionButtonProps } from './common/types';

const AccordionButton = <D,>(props: AccordionButtonProps<D>): ReactElement => {
	const theme = useTheme();

	const { color: defaultColor, colorMode, opened, onSetOpened } = useAccordionsContext<D>();

	const { id, title, color = defaultColor, isDisabled = defaultIsDisabled, size = defaultSize } = props;

	const offset = useConst<number>(Math.abs(convertREMToPixels(convertStringToNumber(theme.space[2], 'rem'))) * -1);
	const delay = useConst<number>(convertStringToNumber(theme.transition.duration.slow, 'ms'));

	const handleClick = () => {
		if (typeof onSetOpened === 'function') {
			onSetOpened(toggleAccordion({ opened, id }));
		}
	};

	return (
		<Link to={!isDisabled ? id.toLowerCase() : ''} spy smooth isDynamic={false} offset={offset} delay={delay}>
			<Button
				color={color}
				colorMode={colorMode}
				onClick={handleClick}
				isDisabled={isDisabled}
				size={size}
				variant='text'
			>
				{title}
			</Button>
		</Link>
	);
};

export default AccordionButton;
