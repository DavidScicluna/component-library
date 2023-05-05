import { FC } from 'react';

import { Box, HStack, VStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../common/hooks';
import { getColor } from '../../../common/utils/color';
import { useProviderContext } from '../../Provider/common/hooks';

import { HeadlineProps } from './common/types';

const Headline: FC<HeadlineProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const [leftRef, { width: leftWidth }] = useElementSize();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();
	const [rightRef, { width: rightWidth }] = useElementSize();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		renderCaption,
		renderTitle,
		renderSubtitle,
		renderLeft,
		renderRight,
		spacing = 0.5,
		...rest
	} = props;

	return (
		<HStack {...rest} width='100%' spacing={0}>
			{renderLeft && (
				<Box ref={leftRef}>
					{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
				</Box>
			)}

			<VStack
				ref={childrenRef}
				width={`calc(100% - ${(renderLeft ? leftWidth : 0) + (renderRight ? rightWidth : 0)}px)`}
				alignItems='flex-start'
				spacing={spacing}
			>
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

			{renderRight && (
				<Box ref={rightRef}>
					{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
				</Box>
			)}
		</HStack>
	);
};

export default Headline;
