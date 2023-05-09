import { FC } from 'react';

import CloseIconButton from '../../../../Clickable/IconButtons/CloseIconButton';
import { useBadgeContext } from '../../common/hooks';

import { BadgeCloseIconButtonProps } from './common/types';

const BadgeCloseIconButton: FC<BadgeCloseIconButtonProps> = (props) => {
	const { color: defaultColor, colorMode, size: defaultSize } = useBadgeContext();

	const {
		color = defaultColor,
		size = defaultSize === 'xs' || defaultSize === 'sm' || defaultSize === 'md' || defaultSize === 'lg'
			? defaultSize
			: 'xl',
		variant = 'icon',
		...rest
	} = props;

	return <CloseIconButton {...rest} color={color} colorMode={colorMode} variant={variant} size={size} />;
};

export default BadgeCloseIconButton;
