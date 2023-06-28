import { createContext, FC } from 'react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultMethod
} from '../../../../common/default/props';
import Tabs from '../../../Navigation/Tabs/OriginalTabs';
import Card from '../../Cards/OriginalCard';
import { useSetHorizontalScrollAPIContext } from '../../HorizontalScroll/common/hooks';
import { scroll as defaultScroll, spacing as defaultSpacing } from '../common/default/props';

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
	const [scroll, setScroll] = useSetHorizontalScrollAPIContext();

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
			value={{
				color,
				colorMode,
				scroll,
				onSetScroll: (scroll) => setScroll(scroll),
				spacing
			}}
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
