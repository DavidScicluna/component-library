import { ReactElement, useContext } from 'react';

import { AccordionContext } from '../..';
import { useTheme } from '../../../../../../../common/hooks';
import { getColor } from '../../../../../../../common/utils/color';
import Divider from '../../../../../../Divider';
import { DividerProps } from '../../../../../../Divider/types';
import { isDisabled as defaultIsDisabled } from '../../../../common/data/defaultPropValues';
import { useAccordionsContext } from '../../../../common/hooks';
import { isLight as defaultIsLight } from '../../common/data/defaultPropValues';
import { AccordionContext as AccordionContextType } from '../../types';

const AccordionDivider = <D,>(props: DividerProps): ReactElement => {
	const theme = useTheme();

	const { color, colorMode } = useAccordionsContext<D>();
	const { isDisabled = defaultIsDisabled, isLight = defaultIsLight } =
		useContext<AccordionContextType<D>>(AccordionContext);

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
