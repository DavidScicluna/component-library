import { FC, useMemo } from 'react';

import { Box, Center, Grid, GridItem, HStack, Progress, Text, useConst, VStack } from '@chakra-ui/react';

import { transparentize } from 'color2k';
import { round, sample } from 'lodash-es';
import { useCountdown, useEffectOnce, useElementSize } from 'usehooks-ts';

import { errorEmojis, errorTitles, successEmojis, successTitles } from '../../../common/data/strings';
import { useGetColor, useTheme } from '../../../common/hooks';
import { Undefinable } from '../../../common/types';
import { convertREMToPixels, convertStringToNumber } from '../../../common/utils';
import { Space } from '../../../theme/types';
import Icon from '../../DataDisplay/Icon';
import { useProviderContext } from '../../Provider/common/hooks';

import { duration as defaultDuration, spacing as defaultSpacing } from './common/default/props';
import { AlertProps } from './common/types';
import { getStatusColor, getStatusIcon } from './common/utils';

const Alert: FC<AlertProps> = (props) => {
	const theme = useTheme();

	const { colorMode: defaultColorMode } = useProviderContext();

	const [contentRef, { height: contentHeight }] = useElementSize();
	const [progressRef, { width: progressWidth }] = useElementSize();
	const [iconRef, { width: iconWidth }] = useElementSize();

	const {
		colorMode = defaultColorMode,
		renderClose,
		duration,
		label,
		description,
		actions,
		onClose,
		spacing = defaultSpacing,
		status
	} = props;

	const sampledTitle = useConst<Undefinable<string>>(
		status === 'error'
			? sample(errorTitles) || errorTitles[0]
			: status === 'success'
			? sample(successTitles) || successTitles[0]
			: undefined
	);
	const sampledEmoji = useConst<Undefinable<string>>(
		status === 'error'
			? sample(errorEmojis) || errorEmojis[0]
			: status === 'success'
			? sample(successEmojis) || successEmojis[0]
			: undefined
	);

	const defaultLabel = useConst<Undefinable<string>>(
		status === 'error'
			? `${sampledTitle}, something went wrong! ${sampledEmoji}`
			: status === 'success'
			? `${sampledTitle}! ${sampledEmoji}`
			: undefined
	);

	const [count, { startCountdown, resetCountdown }] = useCountdown({
		countStart: duration || defaultDuration,
		intervalMs: 1000
	});

	const color = useGetColor({ color: getStatusColor(status), colorMode, type: 'color' });
	const textPrimaryColor = useGetColor({ color: 'gray', colorMode, type: 'text.primary' });
	const textSecondaryColor = useGetColor({ color: 'gray', colorMode, type: 'text.secondary' });
	const borderColor = useGetColor({ color: 'gray', colorMode, type: 'divider' });
	const background = useGetColor({ color: 'gray', colorMode, type: 'background' });
	const shadow = useGetColor({ color: 'gray', colorMode, type: colorMode === 'light' ? 'darkest' : 'lightest' });

	const left = useMemo(() => {
		const height = convertREMToPixels(convertStringToNumber(theme.space['0.5'], 'rem')) / 2;
		const width = contentHeight / 2;

		return `-${width + height}px`;
	}, [contentHeight]);

	const maxWidth = useMemo((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem')) * 2;

		return `calc(100% - ${progressWidth + iconWidth + spacingWidth}px)`;
	}, [progressWidth, iconWidth]);

	useEffectOnce(() => {
		resetCountdown();

		if (duration) {
			startCountdown();
		}

		return () => {
			resetCountdown();
		};
	});

	return (
		<Grid
			minWidth={theme.fontSizes['9xl']}
			templateColumns={onClose ? 'minmax(0, 1fr) min-content' : '1fr'}
			templateRows='1fr'
			alignItems='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			boxShadow={`0px 5px 20px 0px ${transparentize(shadow, 0.85)}`}
			borderRadius='base'
			borderWidth='2px'
			borderStyle='solid'
			borderColor={borderColor}
			background={background}
			gap={spacing}
			py={spacing}
			px={spacing}
			sx={{ 'transition': 'none', '& *, *::before, *::after': { transition: 'none' } }}
		>
			<GridItem>
				<HStack
					ref={contentRef}
					flex={1}
					position='relative'
					alignItems='stretch'
					justifyContent='stretch'
					spacing={spacing}
				>
					<Box ref={progressRef} position='absolute' top='50%' left={left} transform='rotate(-90deg)'>
						<Progress
							width={`${contentHeight}px`}
							height={theme.space['0.5']}
							borderRadius='full'
							background={borderColor}
							value={duration ? round((count / duration) * 100) : 100}
							sx={{
								'& div': { backgroundImage: 'none', backgroundColor: color },
								'transition': 'none',
								'& *, *::before, *::after': { transition: 'none' }
							}}
						/>
					</Box>

					<Center ref={iconRef} ml={spacing}>
						<Icon
							color={getStatusColor(status)}
							colorMode={colorMode}
							width='auto'
							height='auto'
							fontSize={theme.fontSizes['4xl']}
							icon={getStatusIcon(status)}
							category='outlined'
							borderRadius='full'
							p={2}
							variant='contained'
						/>
					</Center>

					<VStack maxWidth={maxWidth} alignItems='flex-start' justifyContent='center' spacing={spacing}>
						<VStack maxWidth='100%' alignItems='flex-start' justifyContent='center' spacing={0}>
							<Text
								maxWidth='100%'
								align='left'
								color={textPrimaryColor}
								fontSize='xl'
								fontWeight='bold'
								lineHeight='shorter'
							>
								{label || defaultLabel}
							</Text>

							<Text
								maxWidth='100%'
								align='left'
								color={textSecondaryColor}
								fontSize='sm'
								lineHeight='shorter'
							>
								{description}
							</Text>
						</VStack>

						{actions}
					</VStack>
				</HStack>
			</GridItem>

			{renderClose && onClose ? (
				<GridItem>
					{renderClose({
						'aria-label': 'Close Alert',
						'color': 'gray',
						'colorMode': colorMode,
						'icon': 'close',
						'category': 'outlined',
						'onClick': () => onClose(),
						'variant': 'icon'
					})}
				</GridItem>
			) : null}
		</Grid>
	);
};

export default Alert;
