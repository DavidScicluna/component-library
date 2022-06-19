import { ReactElement, useContext } from 'react';

import { useConst } from '@chakra-ui/react';

import { Link } from 'react-scroll';

import { AccordionProps } from './types';

import { AccordionsContext } from '../../../..';
import { useTheme } from '../../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../common/utils';
import Button from '../../../../../Clickable/Button';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled
} from '../../../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../../../types';
import { size as defaultSize } from '../../common/data/defaultPropValues';

const Accordion = (props: AccordionProps): ReactElement => {
	const theme = useTheme();

	const { colorMode = defaultColorMode } = useContext<AccordionsContextType>(AccordionsContext);

	const { id, title, color = defaultColor, isDisabled = defaultIsDisabled, onToggle, size = defaultSize } = props;

	const offset = useConst<number>(Math.abs(convertREMToPixels(convertStringToNumber(theme.space[2], 'rem'))) * -1);
	const delay = useConst<number>(convertStringToNumber(theme.transition.duration.slow, 'ms'));

	return (
		<Link to={!isDisabled ? id.toLowerCase() : ''} spy smooth isDynamic={false} offset={offset} delay={delay}>
			<Button
				color={color}
				colorMode={colorMode}
				onClick={() => onToggle({ id })}
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
