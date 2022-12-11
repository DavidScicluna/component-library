import { FC, useCallback } from 'react';

import { useBoolean, useConst, HStack, Center, Text } from '@chakra-ui/react';

import { merge } from 'lodash';
import { useElementSize } from 'usehooks-ts';

import { InternalLink, Fade } from '../../../../..';
import { useTheme } from '../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import { getDelay as getTransitionDelay, getConfig as getTransitionConfig } from '../../../../Transitions/common/utils';
import { useSideNavigationContext } from '../../common/hooks';
import Tooltip from '../../../../Overlay/Tooltip';

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
		path,
		renderLeftIcon,
		renderRightIcon,
		isActive = defaultIsActive,
		isChildActive = defaultIsChildActive,
		isDisabled = defaultIsDisabled,
		spacing = 1.5,
		sx,
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();

	const style = useStyles({ theme, color, colorMode, isActive, isChildActive, mode });

	const delay = useConst(getTransitionDelay({ theme, duration: 'slow' }) * 2);
	const config = useConst({ ...getTransitionConfig({ theme }), delay });

	const handleTextWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));

		return `calc(100% - ${leftIconWidth + rightIconWidth + spacingWidth}px)`;
	}, [theme, spacing, leftIconWidth, rightIconWidth]);

	return (
		<InternalLink to={{ ...path }} isDisabled={isActive || isDisabled} isFullWidth sx={{ opacity: 1 }}>
			<Tooltip
				aria-label={`Navigate to ${title} (tooltip)`}
				colorMode={colorMode}
				isOpen={mode === 'collapsed' && !isDisabled && isHovering}
				placement='left'
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
					onMouseEnter={() => setIsHovering.on()}
					onMouseLeave={() => setIsHovering.off()}
					spacing={spacing}
					sx={{ ...merge(style.navItem, sx) }}
					_disabled={{ ...style.disabled }}
				>
					{renderLeftIcon && (
						<Center ref={leftIcon}>
							{renderLeftIcon({
								width: theme.fontSizes['3xl'],
								height: theme.fontSizes['3xl'],
								color,
								colorMode
							})}
						</Center>
					)}

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

					{renderRightIcon && (
						<Center ref={rightIcon}>
							{renderRightIcon({
								width: theme.fontSizes['3xl'],
								height: theme.fontSizes['3xl'],
								color,
								colorMode
							})}
						</Center>
					)}
				</HStack>
			</Tooltip>
		</InternalLink>
	);
};

export default NavItem;
