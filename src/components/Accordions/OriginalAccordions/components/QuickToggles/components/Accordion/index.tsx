import { ReactElement } from 'react';

import { useConst } from '@chakra-ui/react';

import { Link } from 'react-scroll';

import { useTheme } from '../../../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../../common/utils';
import Button from '../../../../../../Clickable/Buttons/OriginalButton';
import { color as defaultColor } from '../../../../../common/data/defaultPropValues';
import { isDisabled as defaultIsDisabled } from '../../../../common/data/defaultPropValues';
import { toggleAccordion } from '../../../../common/utils';
import { size as defaultSize } from '../../common/data/defaultPropValues';
import { useAccordionsContext } from '../../../../common/hooks';

import { AccordionProps } from './types';

const Accordion = <D,>(props: AccordionProps<D>): ReactElement => {
	const theme = useTheme();

	const { colorMode, opened, onSetOpened } = useAccordionsContext<D>();

	const { id, title, color = defaultColor, isDisabled = defaultIsDisabled, size = defaultSize } = props;

	const offset = useConst<number>(Math.abs(convertREMToPixels(convertStringToNumber(theme.space[2], 'rem'))) * -1);
	const delay = useConst<number>(convertStringToNumber(theme.transition.duration.slow, 'ms'));

	return (
		<Link to={!isDisabled ? id.toLowerCase() : ''} spy smooth isDynamic={false} offset={offset} delay={delay}>
			<Button
				color={color}
				colorMode={colorMode}
				onClick={
					typeof onSetOpened === 'function' ? () => onSetOpened(toggleAccordion({ opened, id })) : undefined
				}
				isDisabled={isDisabled}
				size={size}
				variant='text'
				sx={{ p: 0 }}
			>
				{title}
			</Button>
		</Link>
	);
};

export default Accordion;
