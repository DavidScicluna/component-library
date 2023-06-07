import { FC, useMemo } from 'react';

import { Center, HStack, Tab as CUITab, VStack } from '@chakra-ui/react';
import { dataAttr } from '@chakra-ui/utils';

import { merge, omit } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { useBoolean, useGetColor, useTheme } from '../../../../../../../../common/hooks';
import Divider from '../../../../../../../Divider';
import ScaleFade from '../../../../../../../Transitions/ScaleFade';
import { isDisabled as defaultIsDisabled } from '../../../../../common/default/props';
import { border } from '../../../../../common/default/sizes';
import { getSizeConfig, GetSizeConfigReturn } from '../../../../../common/utils';
import { useTabsContext } from '../../../../common/hooks';

import { isActive as defaultIsActive, isSelected as defaultIsSelected } from './common/default/props';
import useStyles from './common/styles';
import { TabMouseEvent, TabProps } from './common/types';

const Tab: FC<TabProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, isDisabled: isTabDisabled, isFitted, size } = useTabsContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		label,
		index,
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

	const borderColor = useGetColor({
		color: isActive || isSelected ? color : 'gray',
		colorMode,
		type: isActive || isSelected ? 'color' : 'default'
	});

	// TODO: Go over all useMemo and check we are passing down a type
	const config = useMemo<GetSizeConfigReturn>(() => {
		return getSizeConfig({ size });
	}, [size]);

	const style = useStyles({
		theme,
		color,
		colorMode,
		isFullWidth: isFitted,
		isSelected: isActive || isSelected,
		size
	});

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
				className='ds-cl-tabs-tab-stack'
				width='100%'
				alignItems='stretch'
				justifyContent='space-between'
				spacing={0}
			>
				<Center width='100%' px={config.padding.x}>
					<Divider
						width='100%'
						height={`${border.tab}px`}
						backgroundColor={theme.colors.transparent}
						borderStartStartRadius='full'
						borderStartEndRadius='full'
					/>
				</Center>

				<HStack
					width='100%'
					alignItems='stretch'
					justifyContent='stretch'
					spacing={config.spacing}
					px={config.padding.x}
					py={config.padding.y}
				>
					{renderLeft ? renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight }) : null}

					<Center ref={childrenRef} as='span' flex={1}>
						{label}
					</Center>

					{renderRight
						? renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })
						: null}
				</HStack>

				<ScaleFade in={isActive || isSelected || isHovering} unmountOnExit={false} initialScale={0.75}>
					<Center width='100%' px={config.padding.x}>
						<Divider
							width='100%'
							height={`${border.tab}px`}
							backgroundColor={borderColor}
							borderStartStartRadius='full'
							borderStartEndRadius='full'
						/>
					</Center>
				</ScaleFade>
			</VStack>
		</CUITab>
	);
};

export default Tab;
