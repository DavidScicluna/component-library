import { FC } from 'react';

import { Box, HStack, VStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useGetColor } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';

import { HeadlineProps } from './common/types';

const Headline: FC<HeadlineProps> = (props) => {
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

	const captionColor = useGetColor({ color, colorMode, type: 'color' });
	const titleColor = useGetColor({ color: 'gray', colorMode, type: 'text.primary' });
	const subtitleColor = useGetColor({ color: 'gray', colorMode, type: 'text.secondary' });

	return (
		<HStack {...rest} width='100%' spacing={0}>
			{renderLeft ? (
				<Box ref={leftRef}>
					{renderLeft({
						color,
						colorMode,
						width: childrenWidth,
						height: childrenHeight
					})}
				</Box>
			) : null}

			<VStack
				ref={childrenRef}
				width={`calc(100% - ${(renderLeft ? leftWidth : 0) + (renderRight ? rightWidth : 0)}px)`}
				alignItems='flex-start'
				spacing={spacing}
			>
				{renderCaption
					? renderCaption({
							align: 'left',
							color: captionColor,
							fontSize: ['xs', 'xs', 'sm', 'sm', 'sm', 'sm'],
							lineHeight: 'shorter',
							textTransform: 'uppercase'
					  })
					: null}

				{renderTitle({
					align: 'left',
					color: titleColor,
					fontSize: ['4xl', '4xl', '5xl', '5xl', '6xl', '6xl'],
					fontWeight: 'bold',
					lineHeight: 'shorter'
				})}

				{/* Subtitle */}
				{renderSubtitle
					? renderSubtitle({
							align: 'left',
							color: subtitleColor,
							fontSize: ['xs', 'xs', 'sm', 'sm', 'sm', 'sm'],
							lineHeight: 'shorter'
					  })
					: null}
			</VStack>

			{renderRight ? (
				<Box ref={rightRef}>
					{renderRight({
						color,
						colorMode,
						width: childrenWidth,
						height: childrenHeight
					})}
				</Box>
			) : null}
		</HStack>
	);
};

export default Headline;
