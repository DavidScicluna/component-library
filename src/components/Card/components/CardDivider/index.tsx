import { FC, useContext } from 'react';

import { CardContext } from '../..';
import { useTheme } from '../../../../common/hooks';
import { getColor } from '../../../../common/utils/color';
import Divider from '../../../Divider';
import { DividerProps as CardDividerProps } from '../../../Divider/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isLight as defaultIsLight
} from '../../common/data/defaultPropValues';
import { CardContext as CardContextType } from '../../types';

const CardDivider: FC<CardDividerProps> = (props) => {
	const theme = useTheme();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isLight = defaultIsLight
	} = useContext<CardContextType>(CardContext);

	return (
		<Divider
			{...props}
			backgroundColor={getColor({
				theme,
				colorMode,
				color: isDisabled ? 'gray' : color === 'black' || color === 'white' ? 'gray' : color,
				type: isDisabled
					? isLight
						? 'divider'
						: 'text.secondary'
					: color === 'black'
					? 'darkest'
					: color === 'white'
					? 'lightest'
					: color === 'gray'
					? isLight
						? 'divider'
						: 'text.secondary'
					: isLight
					? 'divider'
					: 'color'
			})}
		/>
	);
};

export default CardDivider;
