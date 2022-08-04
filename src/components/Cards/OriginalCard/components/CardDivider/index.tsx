import { FC, useContext, useCallback } from 'react';

import { CardContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import { GetColorProps, getColor } from '../../../../../common/utils/color';
import Divider from '../../../../Divider';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLight as defaultIsLight
} from '../../../common/data/defaultPropValues';
import { isDisabled as defaultIsDisabled } from '../../common/data/defaultPropValues';
import { CardContext as CardContextType } from '../../types';

import { CardDividerProps } from './types';

const CardDivider: FC<CardDividerProps> = (props) => {
	const theme = useTheme();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isLight = defaultIsLight
	} = useContext<CardContextType>(CardContext);

	const handleReturnType = useCallback((): GetColorProps['type'] => {
		if (isDisabled) {
			return isLight ? 'divider' : 'text.secondary';
		} else {
			switch (color) {
				case 'black':
					return 'darkest';
				case 'white':
					return 'lightest';
				default:
					return isLight ? 'divider' : color === 'gray' ? 'text.secondary' : 'color';
			}
		}
	}, [isDisabled, isLight, color]);

	return (
		<Divider
			{...props}
			backgroundColor={getColor({
				theme,
				colorMode,
				color: isDisabled ? 'gray' : color === 'black' || color === 'white' ? 'gray' : color,
				type: handleReturnType()
			})}
		/>
	);
};

export default CardDivider;
