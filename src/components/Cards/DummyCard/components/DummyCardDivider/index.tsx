import { FC, useContext, useCallback } from 'react';

import { DummyCardContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import { getColor, GetColorProps } from '../../../../../common/utils/color';
import Divider from '../../../../Divider';
import { DividerProps as DummyCardDividerProps } from '../../../../Divider/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLight as defaultIsLight
} from '../../../common/data/defaultPropValues';
import { DummyCardContext as DummyCardContextType } from '../../types';

const DummyCardDivider: FC<DummyCardDividerProps> = (props) => {
	const theme = useTheme();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isLight = defaultIsLight
	} = useContext<DummyCardContextType>(DummyCardContext);

	const handleReturnType = useCallback((): GetColorProps['type'] => {
		switch (color) {
			case 'black':
				return 'darkest';
			case 'white':
				return 'lightest';
			default:
				return isLight ? 'divider' : color === 'gray' ? 'text.secondary' : 'color';
		}
	}, [isLight, color]);

	return (
		<Divider
			{...props}
			backgroundColor={getColor({
				theme,
				colorMode,
				color: color === 'black' || color === 'white' ? 'gray' : color,
				type: handleReturnType()
			})}
		/>
	);
};

export default DummyCardDivider;
