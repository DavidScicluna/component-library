import { FC, useMemo } from 'react';

import { Center, HStack, Tab as CUIDummyTab, VStack } from '@chakra-ui/react';

import { merge, omit } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useGetColor, useTheme } from '../../../../../../../../common/hooks';
import Divider from '../../../../../../../DataDisplay/Divider';
import Skeleton from '../../../../../../../Feedback/Skeleton';
import ScaleFade from '../../../../../../../Transitions/ScaleFade';
import { border } from '../../../../../common/default/sizes';
import { getSizeConfig, GetSizeConfigReturn } from '../../../../../common/utils';
import { useDummyTabBarContext } from '../../../../common/hooks';

import { isActive as defaultIsActive, isSelected as defaultIsSelected } from './common/default/props';
import useStyles from './common/styles';
import { DummyTabProps } from './common/types';

const DummyTab: FC<DummyTabProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, size } = useDummyTabBarContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		label,
		renderIcon,
		renderLeft,
		renderRight,
		isActive = defaultIsActive,
		isSelected = defaultIsSelected,
		sx,
		...rest
	} = props;

	const borderColor = useGetColor({
		color: isActive || isSelected ? color : 'gray',
		colorMode,
		type: isActive || isSelected ? 'color' : 'default'
	});

	const config = useMemo<GetSizeConfigReturn>(() => {
		return getSizeConfig({ size });
	}, [size]);

	const style = useStyles({ theme, color, colorMode, isSelected: isActive || isSelected, size });

	return (
		<CUIDummyTab {...omit({ ...rest }, 'panelId')} isDisabled isSelected={isSelected} sx={merge(style.tab, sx)}>
			<VStack
				className='ds-cl-dummytabs-dummytab-stack'
				width='100%'
				alignItems='stretch'
				justifyContent='space-between'
				spacing={0}
			>
				<ScaleFade in={isActive || isSelected} unmountOnExit={false} initialScale={0.75}>
					<Center width='100%' px={config.padding.x}>
						<Divider
							width='100%'
							height={`${border.tab}px`}
							backgroundColor={borderColor}
							borderEndStartRadius='full'
							borderEndEndRadius='full'
						/>
					</Center>
				</ScaleFade>

				<VStack
					width='100%'
					alignItems='stretch'
					justifyContent='stretch'
					spacing={config.spacing.y}
					px={config.padding.x}
					py={config.padding.y}
				>
					{renderIcon ? (
						<Center width='100%'>
							{renderIcon({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</Center>
					) : null}

					<HStack width='100%' alignItems='center' justifyContent='center' spacing={config.spacing.x}>
						{renderLeft
							? renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })
							: null}

						<Center ref={childrenRef} as='span'>
							<Skeleton
								color={isSelected ? color : 'gray'}
								colorMode={colorMode}
								startColor={borderColor}
								endColor={borderColor}
								isLoaded={false}
								variant='text'
							>
								{label}
							</Skeleton>
						</Center>

						{renderRight
							? renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })
							: null}
					</HStack>
				</VStack>

				<Center width='100%' px={config.padding.x}>
					<Divider
						width='100%'
						height={`${border.tab}px`}
						backgroundColor={theme.colors.transparent}
						borderEndStartRadius='full'
						borderEndEndRadius='full'
					/>
				</Center>
			</VStack>
		</CUIDummyTab>
	);
};

export default DummyTab;
