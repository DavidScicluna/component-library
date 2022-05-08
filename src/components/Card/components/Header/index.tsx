import { FC, useContext } from 'react';

import { useMediaQuery, HStack, VStack, Center, Text } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { HeaderProps } from './types';

import { CardContext } from '../..';
import { useTheme } from '../../../../common/hooks';
import { Space } from '../../../../theme/types';
import { Context } from '../../types';

const spacing: Space = 2;

const Header: FC<HeaderProps> = ({ title, subtitle, actions }) => {
	const theme = useTheme();
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
					alignItems='flex-start'
					spacing={0}
				>
					{/* Title */}
					{typeof title === 'string' ? (
						<Text
							align='left'
							color={`gray.${colorMode === 'light' ? 900 : 50}`}
							fontSize={isXs ? 'md' : 'xl'}
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
								fontSize={isXs ? 'xs' : 'sm'}
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
