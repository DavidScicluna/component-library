import { FC, useMemo } from 'react';

import { useTheme } from '../../../../../common/hooks';
import CloseIconButton from '../../../../Clickable/IconButtons/CloseIconButton';
import { IconButtonSize } from '../../../../Clickable/IconButtons/common/types';
import { useBadgeContext } from '../../common/hooks';

import { BadgeCloseIconButtonProps } from './common/types';

const BadgeCloseIconButton: FC<BadgeCloseIconButtonProps> = (props) => {
	const theme = useTheme();

	const { color: defaultColor, colorMode, size: defaultSize } = useBadgeContext();

	const { color = defaultColor, ...rest } = props;

	const size = useMemo((): IconButtonSize => {
		return defaultSize === 'xs' || defaultSize === 'sm' || defaultSize === 'md' || defaultSize === 'lg'
			? defaultSize
			: 'xl';
	}, [defaultSize]);

	return (
		<CloseIconButton
			{...rest}
			color={color}
			colorMode={colorMode}
			size={size}
			variant='icon'
			sx={{
				'*, *::before, *::after': {
					background: theme.colors.transparent,
					backgroundColor: theme.colors.transparent,
					borderColor: theme.colors.transparent
				}
			}}
		/>
	);
};

export default BadgeCloseIconButton;
