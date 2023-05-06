import { FC, useCallback, useEffect, useState } from 'react';

import { Center, HStack, Progress, Text, useConst, VStack } from '@chakra-ui/react';

import { transparentize } from 'color2k';
import { round, sample } from 'lodash-es';
import { useCountdown, useElementSize, useUpdateEffect } from 'usehooks-ts';

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

import { duration as defaultDuration } from './common/default/props';
import { AlertProps } from './common/types';
import { getStatusColor, getStatusIcon } from './common/utils';

const spacing: Space = 2;

const Alert: FC<AlertProps> = (props) => {
	const theme = useTheme();

	const { colorMode: defaultColorMode } = useProviderContext();

	const [contentRef, { height: contentHeight }] = useElementSize();
	const [closeRef, { width: closeWidth }] = useElementSize();

	const { colorMode = defaultColorMode, duration, title, description, onClose, status } = props;

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

	const defaultTitle = useConst<Undefinable<string>>(
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

	const [color, setColor] = useState<string>(
		getColor({ theme, colorMode, color: getStatusColor(status), type: 'color' })
	);
	const [background, setBackground] = useState<string>(getColor({ theme, colorMode, type: 'background' }));

	const handleProgressLeft = useCallback(() => {
		const height = convertREMToPixels(convertStringToNumber(theme.space['0.5'], 'rem')) / 2;
		const width = contentHeight / 2;

		return `-${width + height}px`;
	}, [theme, contentHeight]);

	const handleContentWidth = useCallback(() => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));

		return `calc(100% - ${onClose ? closeWidth + spacingWidth : 0}px)`;
	}, [theme, closeWidth, spacing]);

	useUpdateEffect(() => {
		setBackground(getColor({ theme, colorMode, type: 'background' }));
	}, [colorMode]);

	useUpdateEffect(() => {
		setColor(getColor({ theme, colorMode, color: getStatusColor(status), type: 'color' }));
	}, [status, colorMode]);

	useEffect(() => {
		if (duration) {
			startCountdown();
		}

		return () => {
			setTimeout(() => resetCountdown(), 0);
		};
	}, []);

	return (
		<HStack
			minWidth={theme.fontSizes['9xl']}
			alignItems='center'
			justifyContent='space-between'
			boxShadow={`0px 5px 20px 0px ${transparentize(background, 0.5)}`}
			borderRadius='lg'
			borderWidth='2px'
			borderStyle='solid'
			borderColor={getColor({ theme, colorMode, type: 'divider' })}
			background={background}
			spacing={spacing}
			py={spacing}
			px={spacing}
		>
			<HStack width={handleContentWidth()} position='relative' spacing={spacing}>
				<Center position='absolute' left={handleProgressLeft()}>
					<Progress
						width={`${contentHeight}px`}
						height={theme.space['0.5']}
						borderRadius='full'
						background={getColor({ theme, colorMode, type: 'divider' })}
						value={duration ? round((count / duration) * 100) : 100}
						sx={{
							'transform': 'rotate(-90deg)',
							'& div': { backgroundImage: 'none', backgroundColor: color }
						}}
					/>
				</Center>

				<Icon
					color={getStatusColor(status)}
					colorMode={colorMode}
					width={theme.fontSizes['4xl']}
					height={theme.fontSizes['4xl']}
					fontSize={theme.fontSizes['4xl']}
					icon={getStatusIcon(status)}
					variant='transparent'
				/>

				<VStack ref={contentRef} alignItems='flex-start' justifyContent='center' spacing={0.5}>
					<Text
						align='left'
						color={getColor({ theme, colorMode, type: 'text.primary' })}
						fontSize='xl'
						fontWeight='bold'
						lineHeight='shorter'
						whiteSpace='nowrap'
					>
						{title || defaultTitle}
					</Text>

					<Text
						align='left'
						color={getColor({ theme, colorMode, type: 'text.secondary' })}
						fontSize='sm'
						lineHeight='shorter'
					>
						{description}
					</Text>
				</VStack>
			</HStack>

			{onClose && (
				<Center ref={closeRef}>
					<IconButton
						aria-label='Alert Close Button'
						colorMode={colorMode}
						onClick={() => onClose()}
						variant='icon'
					>
						<IconButtonIcon icon='close' />
					</IconButton>
				</Center>
			)}
		</HStack>
	);
};

export default Alert;
