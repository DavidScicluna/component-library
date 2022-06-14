import { ReactElement, useContext } from 'react';

import { Link } from 'react-scroll';

import { AccordionProps } from './types';

import { AccordionsContext } from '../../../..';
import Button from '../../../../../Clickable/Button';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../../../types';
import { isDisabled as defaultIsDisabled } from '../../common/data/defaultPropValues';

const Accordion = (props: AccordionProps): ReactElement => {
	const { color = defaultColor, colorMode = defaultColorMode } = useContext<AccordionsContextType>(AccordionsContext);

	const { id, title, isDisabled = defaultIsDisabled, onToggle } = props;

	return (
		<Link to={!isDisabled ? id : ''} spy smooth isDynamic={false} offset={-82} delay={500}>
			<Button
				color={color}
				colorMode={colorMode}
				onClick={() => onToggle({ id })}
				isDisabled={isDisabled}
				size='sm'
				variant='text'
				sx={{ front: { px: 0 } }}
			>
				{title}
			</Button>
		</Link>
	);
};

export default Accordion;
