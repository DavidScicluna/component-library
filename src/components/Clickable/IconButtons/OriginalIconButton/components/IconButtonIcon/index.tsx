import { FC } from 'react';

import Icon from '../../../../../Icon';
import { useIconButtonContext } from '../../common/hooks';

import { IconButtonIconProps } from './types';

const IconButtonIcon: FC<IconButtonIconProps> = (props) => {
	const { color, colorMode } = useIconButtonContext();

	return <Icon {...props} colorMode={colorMode} skeletonColor={color} />;
};

export default IconButtonIcon;
