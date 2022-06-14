import { FC, useContext } from 'react';

import { AccordionContext } from '../..';
import { AccordionsContext } from '../../../..';
import { useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import Divider from '../../../../../Divider';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../../../types';
import { isDisabled as defaultIsDisabled } from '../../common/data/defaultPropValues';
import { AccordionContext as AccordionContextType } from '../../types';

const AccordionDivider: FC = () => {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode } = useContext<AccordionsContextType>(AccordionsContext);
	const { isDisabled = defaultIsDisabled } = useContext<AccordionContextType>(AccordionContext);

	return (
		<Divider
			backgroundColor={getColor({
				theme,
				colorMode,
				color: isDisabled ? 'gray' : color,
				type: isDisabled ? 'text.secondary' : 'color'
			})}
		/>
	);
};

export default AccordionDivider;
