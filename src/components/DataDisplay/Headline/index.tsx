import { FC } from 'react';

import { useColorMode, VStack } from '@chakra-ui/react';

import { useTheme } from '../../../common/hooks';
import { getColor } from '../../../common/utils/color';

import { color as defaultColor, colorMode as defaultColorMode } from './common/data/defaultPropValues';
import { HeadlineProps } from './types';

const Headline: FC<HeadlineProps> = (props) => {
	const theme = useTheme();
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		color = defaultColor,
		colorMode = colorModeHook,
		renderCaption,
		renderTitle,
		renderSubtitle,
		spacing = 0.5,
		...rest
	} = props;

	return (
		<VStack {...rest} width='100%' alignItems='flex-start' spacing={spacing}>
			{renderCaption &&
				renderCaption({
					align: 'left',
					color: getColor({ theme, colorMode, color, type: 'color' }),
					fontSize: ['xs', 'xs', 'sm', 'sm', 'sm', 'sm'],
					lineHeight: 'shorter',
					textTransform: 'uppercase'
				})}

			{renderTitle({
				align: 'left',
				color: getColor({ theme, colorMode, type: 'text.primary' }),
				fontSize: ['4xl', '4xl', '5xl', '5xl', '6xl', '6xl'],
				fontWeight: 'bold',
				lineHeight: 'shorter'
			})}

			{/* Subtitle */}
			{renderSubtitle &&
				renderSubtitle({
					align: 'left',
					color: getColor({ theme, colorMode, type: 'text.secondary' }),
					fontSize: ['xs', 'xs', 'sm', 'sm', 'sm', 'sm'],
					lineHeight: 'shorter'
				})}
		</VStack>
	);
};

export default Headline;
