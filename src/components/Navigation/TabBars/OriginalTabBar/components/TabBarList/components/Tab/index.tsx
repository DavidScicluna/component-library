import { FC, useMemo } from 'react';

import { Center, HStack, Tab as CUITab, VStack } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { merge, omit } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useBoolean, useTheme } from '../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../common/utils/color';
import Divider from '../../../../../../../Divider';
import ScaleFade from '../../../../../../../Transitions/ScaleFade';
import { isDisabled as defaultIsDisabled } from '../../../../../common/default/props';
import { getSizeConfig } from '../../../../../common/utils';
import { useTabBarContext } from '../../../../common/hooks';

import { isActive as defaultIsActive, isSelected as defaultIsSelected } from './common/default/props';
import useStyles from './common/styles';
import { TabMouseEvent, TabProps } from './common/types';

const Tab: FC<TabProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isDisabled: isTabDisabled, size } = useTabBarContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		label,
		index,
		renderIcon,
		renderLeft,
		renderRight,
		isActive = defaultIsActive,
		isDisabled = defaultIsDisabled,
		isSelected = defaultIsSelected,
		onSelect,
		onClick,
		onMouseEnter,
		onMouseLeave,
		sx,
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();

	const spacing = useMemo(() => {
		return getSizeConfig({ size }).spacing;
	}, [size]);

	const style = useStyles({ theme, color, colorMode, isSelected: isActive || isSelected, size });

	const handleClick = (event: TabMouseEvent): void => {
		onSelect(index);

		if (onClick) {
			onClick(event);
		}
	};

	const handleMouseEnter = (event: TabMouseEvent): void => {
		setIsHovering.on();

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: TabMouseEvent): void => {
		setIsHovering.off();

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	return (
		<CUITab
			{...omit({ ...rest }, 'panelId')}
			aria-disabled={isTabDisabled || isDisabled}
			data-active={dataAttr(isActive || isSelected)}
			isDisabled={isTabDisabled || isDisabled}
			isSelected={isSelected}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			sx={merge(style.tab, sx)}
			_disabled={style.disabled}
			_active={style.active}
		>
			<VStack
				className='ds-cl-tab-bar-tab-stack'
				width='100%'
				alignItems='stretch'
				justifyContent='space-between'
				spacing={0}
			>
				<ScaleFade in={isActive || isSelected || isHovering} unmountOnExit={false} initialScale={0.75}>
					<Divider
						backgroundColor={getColor({
							theme,
							colorMode,
							color: isActive || isSelected ? color : 'gray',
							type: isActive || isSelected ? 'color' : 'text.secondary'
						})}
					/>
				</ScaleFade>

				<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
					{renderIcon ? renderIcon({ color, colorMode, width: childrenWidth, height: childrenHeight }) : null}

					<HStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
						{renderLeft
							? renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })
							: null}

						<Center ref={childrenRef} as='span' flex={1}>
							{label}
						</Center>

						{renderRight
							? renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })
							: null}
					</HStack>
				</VStack>

				<Divider backgroundColor={theme.colors.transparent} />
			</VStack>
		</CUITab>
	);
};

export default Tab;