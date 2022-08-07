import { FC, useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/data/defaultPropValues';
import { IconButtonContext } from '../..';
import { IconButtonContext as IconButtonContextType } from '../../types';
import Icon from '../../../../../Icon';

import { IconButtonIconProps } from './types';

const IconButtonIcon: FC<IconButtonIconProps> = (props) => {
	const { color = defaultColor, colorMode = defaultColorMode } = useContext<IconButtonContextType>(IconButtonContext);

	return <Icon {...props} colorMode={colorMode} skeletonColor={color} />;
};

export default IconButtonIcon;
