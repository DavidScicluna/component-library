import { createContext, FC, useState } from 'react';

import { method as defaultMethod } from '../../../../common/default/props';
import { useDebounce } from '../../../../common/hooks';
import Card from '../../../Cards/OriginalCard';
import { HorizontalScrollAPIContext } from '../../../HorizontalScroll/types';
import Tabs from '../../../Navigation/Tabs/OriginalTabs';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	scroll as defaultScroll,
	spacing as defaultSpacing
} from '../common/default/props';

import {
	HorizontalGridTabbedContext as HorizontalGridTabbedContextType,
	HorizontalGridTabbedProps
} from './common/types';

export const HorizontalGridTabbedContext = createContext<HorizontalGridTabbedContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	scroll: defaultScroll,
	onSetScroll: defaultMethod,
	spacing: defaultSpacing
});

const HorizontalGridTabbed: FC<HorizontalGridTabbedProps> = (props) => {
	const [scroll, setScroll] = useState<HorizontalScrollAPIContext>(defaultScroll);
	const scrollDebounced = useDebounce(scroll, 'ultra-fast');

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		tabsProps = {},
		cardProps = {},
		spacing = defaultSpacing
	} = props;

	return (
		<HorizontalGridTabbedContext.Provider
			value={{ color, colorMode, scroll: scrollDebounced, onSetScroll: (scroll) => setScroll(scroll), spacing }}
		>
			<Tabs
				{...tabsProps}
				color={color !== 'white' && color !== 'black' && color !== 'gray' ? color : tabsProps.color}
				colorMode={colorMode}
				isFitted
			>
				<Card {...cardProps} color={color} colorMode={colorMode} spacing={spacing}>
					{children}
				</Card>
			</Tabs>
		</HorizontalGridTabbedContext.Provider>
	);
};

export default HorizontalGridTabbed;
