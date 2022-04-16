import { FC, useContext } from 'react';

import { useTheme, useMediaQuery, HStack, VStack, Center, Text } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { HeaderProps } from './types';

import { CardContext } from '../..';
import { Space, Theme } from '../../../../theme/types';
import { Context } from '../../types';

const spacing: Space = 2;

const Header: FC<HeaderProps> = ({ title, subtitle, actions }) => {
	const theme = useTheme<Theme>();
	const [isXs] = useMediaQuery('(max-width: 600px)');

	const { colorMode } = useContext<Context>(CardContext);

	const [ref, { width }] = useElementSize();

	return (
		<HStack
			width='100%'
			alignItems='center'
			justifyContent={title ? 'space-between' : 'flex-end'}
			spacing={spacing}
		>
			{title ? (
				<VStack
					width={`calc(100% - ${actions ? width + theme.space[spacing] : 0}px)`}
					justifyContent='flex-start'
				>
					{/* Title */}
					{typeof title === 'string' ? (
						<Text
							align='left'
							color={`gray.${colorMode === 'light' ? 900 : 50}`}
							fontSize={isXs ? 'md' : 'lg'}
							fontWeight='bold'
							isTruncated
							overflow='hidden'
							whiteSpace='nowrap'
						>
							{title}
						</Text>
					) : (
						title
					)}

					{/* Subtitle */}
					{subtitle ? (
						typeof title === 'string' ? (
							<Text
								align='left'
								color={`gray.${colorMode === 'light' ? 400 : 500}`}
								fontSize={isXs ? 'md' : 'lg'}
								isTruncated
								overflow='hidden'
								whiteSpace='nowrap'
							>
								{subtitle}
							</Text>
						) : (
							subtitle
						)
					) : null}
				</VStack>
			) : null}

			{actions ? <Center ref={ref}>{actions}</Center> : null}
		</HStack>
	);
};

export default Header;
