import { createContext, FC } from 'react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnChange
} from '../../../common/default/props';
import { useProviderContext } from '../../Provider/common/hooks';

import { colors as defaultColors } from './common/default/props';
import { ColorSwitcherContext as ColorSwitcherContextType, ColorSwitcherProps } from './common/types';

export const ColorSwitcherContext = createContext<ColorSwitcherContextType>({
	color: defaultColor,
	colors: defaultColors,
	colorMode: defaultColorMode,
	onChange: defaultOnChange
});

const ColorSwitcher: FC<ColorSwitcherProps> = (props) => {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const { children, color = defaultColor, colors = defaultColors, colorMode = defaultColorMode, onChange } = props;

	return (
		<ColorSwitcherContext.Provider
			value={{
				color,
				colors,
				colorMode,
				onChange
			}}
		>
			<>{children}</>
		</ColorSwitcherContext.Provider>
	);
};

export default ColorSwitcher;
