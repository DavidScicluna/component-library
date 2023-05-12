import { FC, useMemo } from 'react';

import { Button as CUIButton, Center, Grid, GridItem } from '@chakra-ui/react';

import { compact, merge } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../common/hooks';
import { Radius } from '../../../../theme/types';
import Skeleton from '../../../Feedback/Skeleton';
import PushableOverlay from '../../../Overlay/PushableOverlay';
import { useProviderContext } from '../../../Provider/common/hooks';
import {
	isCompact as defaultIsCompact,
	isFullWidth as defaultIsFullWidth,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../common/default/props';
import useStyles from '../common/styles';
import { getSizeConfig, GetSizeConfigReturn, getVariantRadius } from '../common/utils';

import { DummyButtonProps } from './common/types';

const DummyButton: FC<DummyButtonProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isCompact = defaultIsCompact,
		isFullWidth = defaultIsFullWidth,
		isRound = defaultIsRound,
		renderLeft,
		renderRight,
		size = defaultSize,
		variant = defaultVariant,
		sx,
		...rest
	} = props;

	const radius = useMemo((): Radius => {
		return getVariantRadius({ isCompact, isRound, variant });
	}, [isCompact, isRound, variant]);
	const config = useMemo((): GetSizeConfigReturn => {
		return getSizeConfig({ isCompact, size });
	}, [isCompact, size]);

	const style = useStyles({ theme, isCompact, isFullWidth, isLoading: true, size });

	return (
		<Skeleton {...rest} color={color} colorMode={colorMode} borderRadius={radius} isLoaded={false}>
			<CUIButton
				isDisabled
				variant='unstyled'
				sx={merge(style.button, sx)}
				_disabled={style.disabled}
				_active={style.active}
			>
				<PushableOverlay
					width='100%'
					height='100%'
					borderRadius={radius}
					color={color}
					colorMode={colorMode}
					isDisabled
					isPushable={false}
					variant={variant === 'text' ? 'transparent' : variant}
					px={config.padding.x}
					py={config.padding.y}
				>
					<Grid
						width='100%'
						height='100%'
						templateColumns={compact([
							renderLeft ? 'auto' : null,
							'auto',
							renderRight ? 'auto' : null
						]).join(' ')}
						templateRows='1fr'
						alignItems='center'
						alignContent='center'
						justifyContent='center'
						gap={config.spacing}
					>
						{renderLeft ? (
							<GridItem>
								{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
							</GridItem>
						) : null}

						{children ? (
							<GridItem>
								<Center ref={childrenRef} as='span' width='100%' height='100%'>
									{children}
								</Center>
							</GridItem>
						) : null}

						{renderRight ? (
							<GridItem>
								{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
							</GridItem>
						) : null}
					</Grid>
				</PushableOverlay>
			</CUIButton>
		</Skeleton>
	);
};

export default DummyButton;
