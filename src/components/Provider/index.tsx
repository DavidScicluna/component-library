import { createContext, FC, useState } from 'react';

import {
	__DEFAULT_APP_COLOR__,
	__DEFAULT_APP_COLORMODE__,
	__DEFAULT_HAS_FILLEDICON_LOADED__,
	__DEFAULT_HAS_OUTLINEDICON_LOADED__,
	__DEFAULT_HAS_TWOTONEICON_LOADED__
} from '../../common/constants';
import { useBoolean } from '../../common/hooks';
import type { AppColor, AppColorMode } from '../../common/types/theme';

// import TransitionsProvider from '../Transitions/TransitionsProvider';
import type {
	IconFontContext as IconFontContextType,
	ProviderContext as ProviderContextType,
	ProviderProps
	// TransitionsContext as TransitionsContextType
} from './common/types';
import ColorModeScript from './components/ColorModeScript';
import ColorScript from './components/ColorScript';
import IconFontScript from './components/IconFontScript';

import './common/styles/index.css';

export const ProviderContext = createContext<ProviderContextType>({
	color: __DEFAULT_APP_COLOR__,
	colorMode: __DEFAULT_APP_COLORMODE__
});
// export const TransitionsContext = createContext<TransitionsContextType>({
// 	color: __DEFAULT_APP_COLOR__,
// 	colorMode: __DEFAULT_APP_COLORMODE__
// });
export const IconFontContext = createContext<IconFontContextType>({
	filled: __DEFAULT_HAS_FILLEDICON_LOADED__,
	outlined: __DEFAULT_HAS_OUTLINEDICON_LOADED__,
	twoTone: __DEFAULT_HAS_TWOTONEICON_LOADED__
});

const Provider: FC<ProviderProps> = (props) => {
	const {
		children,
		color: initialColor = __DEFAULT_APP_COLOR__,
		colorMode: initialColorMode = __DEFAULT_APP_COLORMODE__
	} = props;

	const [color, setColor] = useState<AppColor>(__DEFAULT_APP_COLOR__);
	const [colorMode, setColorMode] = useState<AppColorMode>(__DEFAULT_APP_COLORMODE__);

	const [hasFilledIconLoaded, setHasFilledIconLoaded] = useBoolean(__DEFAULT_HAS_FILLEDICON_LOADED__);
	const [hasOutlinedIconLoaded, setHasOutlinedIconLoaded] = useBoolean(__DEFAULT_HAS_OUTLINEDICON_LOADED__);
	const [hasTwoToneIconLoaded, setHasTwoToneIconLoaded] = useBoolean(__DEFAULT_HAS_TWOTONEICON_LOADED__);

	return (
		<ProviderContext.Provider value={{ color, colorMode }}>
			{/* <TransitionsProvider> */}
			<ColorScript initialColor={initialColor} onSetColor={(color) => setColor(color)} />
			<ColorModeScript
				initialColorMode={initialColorMode}
				onSetColorMode={(colorMode) => setColorMode(colorMode)}
			/>
			<IconFontScript
				onSetHasFilledIconLoaded={setHasFilledIconLoaded}
				onSetHasOutlinedIconLoaded={setHasOutlinedIconLoaded}
				onSetHasTwoToneIconLoaded={setHasTwoToneIconLoaded}
			/>
			<IconFontContext.Provider
				value={{
					filled: hasFilledIconLoaded,
					outlined: hasOutlinedIconLoaded,
					twoTone: hasTwoToneIconLoaded
				}}
			>
				{children}
			</IconFontContext.Provider>
			{/* </TransitionsProvider> */}
		</ProviderContext.Provider>
	);
};

export default Provider;
