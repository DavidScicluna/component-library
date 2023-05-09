import { FC } from 'react';

import CloseIconButton from '../../../../Clickable/IconButtons/CloseIconButton';
import { useBadgeContext } from '../../common/hooks';

import { BadgeCloseIconButtonProps } from './common/types';

const BadgeCloseIconButton: FC<BadgeCloseIconButtonProps> = (props) => {
	const { color: defaultColor, colorMode } = useBadgeContext();

	const { color = defaultColor, ...rest } = props;

	return <CloseIconButton {...rest} color={color} colorMode={colorMode} />;
};

export default BadgeCloseIconButton;
