import { ReactElement, useContext } from 'react';

import {
	useTheme,
	Divider,
	DividerProps as CollapsibleCardDividerProps,
	utils
} from '@davidscicluna/component-library';

import { CollapsibleCardContext } from '../..';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isLight as defaultIsLight
} from '../../common/data/defaultPropValues';
import { CollapsibleCardContext as CollapsibleCardContextType } from '../../types';

const { getColor } = utils;

const CollapsibleCardDivider = (props: CollapsibleCardDividerProps): ReactElement => {
	const theme = useTheme();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isLight = defaultIsLight
	} = useContext<CollapsibleCardContextType>(CollapsibleCardContext);

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

export default CollapsibleCardDivider;
