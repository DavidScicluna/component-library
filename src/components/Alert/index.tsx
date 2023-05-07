import { FC, useEffect, useMemo } from 'react';

import { Center, Grid, GridItem, HStack, Progress, Text, useConst, VStack } from '@chakra-ui/react';

import { transparentize } from 'color2k';
import { round, sample } from 'lodash-es';
import { useCountdown, useElementSize } from 'usehooks-ts';

import { errorEmojis, errorTitles, successEmojis, successTitles } from '../../common/data/strings';
import { useTheme } from '../../common/hooks';
import { Undefinable } from '../../common/types';
import { convertREMToPixels, convertStringToNumber } from '../../common/utils';
import { getColor } from '../../common/utils/color';
import { Space } from '../../theme/types';
import IconButton from '../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import Icon from '../Icon';
import { useProviderContext } from '../Provider/common/hooks';

import { duration as defaultDuration, spacing as defaultSpacing } from './common/default/props';
import { AlertProps } from './common/types';
import { getStatusColor, getStatusIcon } from './common/utils';

const Alert: FC<AlertProps> = (props) => {
	const theme = useTheme();

	const { colorMode: defaultColorMode } = useProviderContext();

	const [progressRef, { width: progressWidth }] = useElementSize();
	const [iconRef, { width: iconWidth }] = useElementSize();

	const {
		colorMode = defaultColorMode,
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

	const color = useMemo<string>(() => {
		return getColor({ theme, colorMode, color: getStatusColor(status), type: 'color' });
	}, [colorMode, status]);

	const background = useMemo<string>(() => {
		return getColor({ theme, colorMode, type: 'background' });
	}, [colorMode]);

	const contentWidth = useMemo((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem')) * 2;

		return `calc(100% - ${progressWidth + iconWidth + spacingWidth}px)`;
	}, [progressWidth, iconWidth]);

	useEffect(() => {
		if (duration) {
			startCountdown();
		}

		return () => {
			setTimeout(() => resetCountdown(), 0);
		};
	}, []);

	return (
		<Grid
			minWidth={theme.fontSizes['9xl']}
			templateColumns={onClose ? 'minmax(0, 1fr) min-content' : '1fr'}
			templateRows='1fr'
			alignItems='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			boxShadow={`0px 5px 20px 0px ${transparentize(background, 0.5)}`}
			borderRadius='base'
			borderWidth='2px'
			borderStyle='solid'
			borderColor={getColor({ theme, colorMode, type: 'divider' })}
			background={background}
			gap={spacing}
			py={spacing}
			px={spacing}
			sx={{ 'transition': 'none', '& *, *::before, *::after': { transition: 'none' } }}
		>
			<GridItem>
				<HStack flex={1} alignItems='stretch' justifyContent='stretch' spacing={spacing}>
					<Center ref={progressRef} alignItems='stretch' justifyContent='stretch'>
						<Progress
							width={theme.space['0.5']}
							height='auto'
							borderRadius='full'
							background={getColor({ theme, colorMode, type: 'divider' })}
							value={duration ? round((count / duration) * 100) : 100}
							sx={{ '& div': { backgroundImage: 'none', backgroundColor: color } }}
						/>
					</Center>

					<Center ref={iconRef}>
						<Icon
							color={getStatusColor(status)}
							colorMode={colorMode}
							width='auto'
							height='auto'
							fontSize={theme.fontSizes['4xl']}
							icon={getStatusIcon(status)}
							borderRadius='full'
							p={1}
							variant='contained'
						/>
					</Center>

					<VStack maxWidth={contentWidth} alignItems='flex-start' justifyContent='center' spacing={spacing}>
						<VStack maxWidth='100%' alignItems='flex-start' justifyContent='center' spacing={0}>
							<Text
								maxWidth='100%'
								align='left'
								color={getColor({ theme, colorMode, type: 'text.primary' })}
								fontSize='xl'
								fontWeight='bold'
								lineHeight='shorter'
							>
								{label || defaultLabel}
							</Text>

							<Text
								maxWidth='100%'
								align='left'
								color={getColor({ theme, colorMode, type: 'text.secondary' })}
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

			{onClose ? (
				<GridItem>
					<IconButton
						aria-label='Alert Close Button'
						colorMode={colorMode}
						// onClick={() => onClose()}
						variant='icon'
					>
						<IconButtonIcon icon='close' />
					</IconButton>
				</GridItem>
			) : null}
		</Grid>
	);
};

export default Alert;
