import { createContext, useState } from 'react';

import { MotionConfig } from 'framer-motion';

import {
	DEFAULT_ANIMATION_DELAY,
	DEFAULT_ANIMATION_DURATION,
	DEFAULT_ANIMATION_EASING,
	DEFAULT_APP_COLOR,
	DEFAULT_APP_COLORMODE,
	DEFAULT_HAS_FILLEDICON_LOADED,
	DEFAULT_HAS_OUTLINEDICON_LOADED,
	DEFAULT_HAS_TWOTONEICON_LOADED
} from '@common/constants';
import { useBoolean, useConst } from '@common/hooks';
import type { AnimationConfig, ThemeAppColor, ThemeAppColorMode } from '@common/types';
import { getAnimationConfig } from '@common/utils';

import type {
	AnimationContext as AnimationContextType,
	IconFontContext as IconFontContextType,
	ProviderContext as ProviderContextType,
	ProviderProps
} from './common/types';
import ColorModeScript from './components/ColorModeScript';
import ColorScript from './components/ColorScript';
import IconFontScript from './components/IconFontScript';

import '@common/styles/index.css';

export const ProviderContext = createContext<ProviderContextType>({
	color: DEFAULT_APP_COLOR,
	colorMode: DEFAULT_APP_COLORMODE
});
export const AnimationContext = createContext<AnimationContextType>({
	delay: DEFAULT_ANIMATION_DELAY,
	duration: DEFAULT_ANIMATION_DURATION,
	easing: DEFAULT_ANIMATION_EASING
});
export const IconFontContext = createContext<IconFontContextType>({
	filled: DEFAULT_HAS_FILLEDICON_LOADED,
	outlined: DEFAULT_HAS_OUTLINEDICON_LOADED,
	twoTone: DEFAULT_HAS_TWOTONEICON_LOADED
});

const Provider = (props: ProviderProps): JSX.Element => {
	const {
		children,
		color: initialColor = DEFAULT_APP_COLOR,
		colorMode: initialColorMode = DEFAULT_APP_COLORMODE
	} = props;

	const [color, setColor] = useState<ThemeAppColor>(DEFAULT_APP_COLOR);
	const [colorMode, setColorMode] = useState<ThemeAppColorMode>(DEFAULT_APP_COLORMODE);

	const [hasFilledIconLoaded, setHasFilledIconLoaded] = useBoolean(DEFAULT_HAS_FILLEDICON_LOADED);
	const [hasOutlinedIconLoaded, setHasOutlinedIconLoaded] = useBoolean(DEFAULT_HAS_OUTLINEDICON_LOADED);
	const [hasTwoToneIconLoaded, setHasTwoToneIconLoaded] = useBoolean(DEFAULT_HAS_TWOTONEICON_LOADED);

	const animationConfig = useConst<AnimationConfig>(getAnimationConfig());

	return (
		<ProviderContext.Provider value={{ color, colorMode }}>
			<AnimationContext.Provider value={{ ...animationConfig, delay: DEFAULT_ANIMATION_DELAY }}>
				<MotionConfig transition={{ ...animationConfig }}>
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
				</MotionConfig>
			</AnimationContext.Provider>
		</ProviderContext.Provider>
	);
};

Provider.displayName = 'Provider';

export default Provider;
