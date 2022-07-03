import { FC, useContext } from 'react';

import { AccordionContext } from '../..';
import { AccordionsContext } from '../../../..';
import { useTheme } from '../../../../../../../common/hooks';
import { getColor } from '../../../../../../../common/utils/color';
import Divider from '../../../../../../Divider';
import { DividerProps } from '../../../../../../Divider/types';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/data/defaultPropValues';
import { isDisabled as defaultIsDisabled } from '../../../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../../../types';
import { isLight as defaultIsLight } from '../../common/data/defaultPropValues';
import { AccordionContext as AccordionContextType } from '../../types';

const AccordionDivider: FC<DividerProps> = (props) => {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode } = useContext<AccordionsContextType>(AccordionsContext);
	const { isDisabled = defaultIsDisabled, isLight = defaultIsLight } =
		useContext<AccordionContextType>(AccordionContext);

	return (
		<Divider
			{...props}
			backgroundColor={getColor({
				theme,
				colorMode,
				color: isDisabled ? 'gray' : color,
				type: isDisabled
					? isLight
						? 'divider'
						: 'text.secondary'
					: isLight
					? 'divider'
					: color === 'gray'
					? 'text.secondary'
					: 'color'
			})}
		/>
	);
};

export default AccordionDivider;
