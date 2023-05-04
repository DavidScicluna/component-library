import { forwardRef, ReactElement, useCallback } from 'react';

import { Box, Center, HStack, VStack } from '@chakra-ui/react';

import { merge } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useProviderContext, useTheme } from '../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../common/utils';
import { Space } from '../../../../theme/types';
import Icon from '../../../Icon';
import PushableOverlay from '../../../Overlay/PushableOverlay';
import Skeleton from '../../../Skeleton';
import { spacing as defaultSpacing, variant as defaultVariant } from '../common/default/props';
import useStyles from '../common/styles';

import { DummyCollapsibleCardProps, DummyCollapsibleCardRef } from './common/types';

const DummyCollapsibleCard = forwardRef<DummyCollapsibleCardRef, DummyCollapsibleCardProps>(
	function DummyCollapsibleCard(props, ref): ReactElement {
		const theme = useTheme();

		const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

		const [leftRef, { width: leftWidth }] = useElementSize();
		const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();
		const [rightRef, { width: rightWidth }] = useElementSize();

		const [actionsRef, { width: actionsWidth }] = useElementSize();

		const {
			color = defaultColor,
			colorMode = defaultColorMode,
			renderLeft,
			renderRight,
			renderTitle,
			renderSubtitle,
			actions,
			spacing = defaultSpacing,
			variant = defaultVariant,
			sx,
			...rest
		} = props;

		const style = useStyles({ theme, isClickable: false, isDisabled: true, isFixed: false });

		const handleCalculateTextWidth = useCallback((): string => {
			const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

			return `calc(100% - ${actions ? actionsWidth + spacingWidth : 0}px)`;
		}, [theme, spacing, actionsWidth]);

		return (
			<PushableOverlay
				{...rest}
				ref={ref}
				as='div'
				tabIndex={0}
				borderRadius={variant === 'transparent' ? 'none' : 'xl'}
				color={color}
				colorMode={colorMode}
				isDisabled
				isPushable={false}
				variant={variant}
				sx={merge(style.card, sx)}
				_disabled={style.disabled}
				_active={style.active}
			>
				<HStack width='100%' spacing={spacing}>
					{renderLeft && (
						<Box ref={leftRef}>
							{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</Box>
					)}

					<HStack
						ref={childrenRef}
						width={`calc(100% - ${(renderLeft ? leftWidth : 0) + (renderRight ? rightWidth : 0)}px)`}
						alignItems='center'
						justifyContent={renderTitle ? 'space-between' : 'flex-end'}
						spacing={spacing}
					>
						{renderTitle && (
							<VStack width={handleCalculateTextWidth()} alignItems='flex-start' spacing={0.5}>
								{/* Title */}
								<Skeleton colorMode={colorMode} isLoaded={false} variant='text'>
									{renderTitle({
										align: 'left',
										fontSize: 'xl',
										fontWeight: 'bold',
										lineHeight: 'normal',
										noOfLines: 1
									})}
								</Skeleton>

								{/* Subtitle */}
								{renderSubtitle && (
									<Skeleton colorMode={colorMode} isLoaded={false} variant='text'>
										{renderSubtitle({
											align: 'left',
											fontSize: 'sm',
											lineHeight: 'normal',
											noOfLines: 1
										})}
									</Skeleton>
								)}
							</VStack>
						)}

						<HStack ref={actionsRef} spacing={spacing}>
							{actions && <Center>{actions}</Center>}

							<Skeleton colorMode={colorMode} isLoaded={false} variant='circle'>
								<Icon colorMode={colorMode} icon='add' />
							</Skeleton>
						</HStack>
					</HStack>

					{renderRight && (
						<Box ref={rightRef}>
							{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
						</Box>
					)}
				</HStack>
			</PushableOverlay>
		);
	}
);

export default DummyCollapsibleCard;
