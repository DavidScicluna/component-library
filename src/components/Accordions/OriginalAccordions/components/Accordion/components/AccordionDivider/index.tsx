import { ReactElement } from 'react';

import { useTheme } from '../../../../../../../common/hooks';
import { getColor } from '../../../../../../../common/utils/color';
import Divider from '../../../../../../Divider';
import { DividerProps } from '../../../../../../Divider/common/types';
import { useAccordionsContext } from '../../../../common/hooks';
import { useAccordionContext } from '../../common/hooks';

const AccordionDivider = <D,>(props: DividerProps): ReactElement => {
	const theme = useTheme();

	const { color, colorMode } = useAccordionsContext<D>();
	const { isDisabled, isLight } = useAccordionContext<D>();

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
