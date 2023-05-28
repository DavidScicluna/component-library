import { FC, useCallback } from 'react';

import { Center, HStack, Text } from '@chakra-ui/react';

import { merge } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { Fade, HoverOverlay } from '../../../../..';
import { useConst, useTheme } from '../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import Tooltip from '../../../../Overlay/Tooltip';
import { getConfig as getTransitionConfig, getDelay as getTransitionDelay } from '../../../../Transitions/common/utils';
import { useSideNavigationContext } from '../../common/hooks';

import {
	isActive as defaultIsActive,
	isChildActive as defaultIsChildActive,
	isDisabled as defaultIsDisabled
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { NavItemProps } from './types';

const NavItem: FC<NavItemProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isDrawer, mode } = useSideNavigationContext();

	const [leftIcon, { width: leftIconWidth }] = useElementSize();
	const [rightIcon, { width: rightIconWidth }] = useElementSize();

	const {
		title,
		renderLeftIcon,
		renderRightIcon,
		isActive = defaultIsActive,
		isChildActive = defaultIsChildActive,
		isDisabled = defaultIsDisabled,
		spacing = 1.5,
		sx,
		...rest
	} = props;

	const style = useStyles({ theme, color, colorMode, isActive, isChildActive, mode });

	const delay = useConst(getTransitionDelay({ theme, duration: 'slow' }) * 2);
	const config = useConst({ ...getTransitionConfig({ theme }), delay });

	const handleTextWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));

		return `calc(100% - ${leftIconWidth + rightIconWidth + spacingWidth}px)`;
	}, [theme, spacing, leftIconWidth, rightIconWidth]);

	return (
		<HoverOverlay>
			{({ isHovering }) => (
				<Tooltip
					aria-label={`Navigate to ${title} (tooltip)`}
					colorMode={colorMode}
					isOpen={mode === 'collapsed' && !isDisabled && isHovering}
					placement='right'
					label={title}
					gutter={36}
					shouldWrapChildren
				>
					<HStack
						{...rest}
						width='100%'
						aria-disabled={isDisabled}
						alignItems='center'
						justifyContent='stretch'
						spacing={spacing}
						sx={{ ...merge(style.navItem, sx) }}
						_disabled={{ ...style.disabled }}
					>
						{renderLeftIcon ? (
							<Center ref={leftIcon}>
								{renderLeftIcon({
									width: theme.fontSizes['3xl'],
									height: theme.fontSizes['3xl'],
									color,
									colorMode
								})}
							</Center>
						) : null}

						<Fade
							in={isDrawer || mode === 'expanded'}
							transition={
								isDrawer ? { enter: { duration: 0 }, exit: { duration: 0 } } : { enter: { ...config } }
							}
							style={{ width: handleTextWidth(), flex: 1 }}
						>
							<Text
								align={mode === 'expanded' ? 'left' : 'center'}
								fontSize='md'
								fontWeight='semibold'
								textTransform='uppercase'
								lineHeight='base'
								letterSpacing='.6px'
								noOfLines={1}
							>
								{title}
							</Text>
						</Fade>

						{renderRightIcon ? (
							<Center ref={rightIcon}>
								{renderRightIcon({
									width: theme.fontSizes['3xl'],
									height: theme.fontSizes['3xl'],
									color,
									colorMode
								})}
							</Center>
						) : null}
					</HStack>
				</Tooltip>
			)}
		</HoverOverlay>
	);
};

export default NavItem;
