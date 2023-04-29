import { FC } from 'react';

import Icon from '../../../../../Icon';
import { useIconButtonFontSize } from '../../../common/hooks';
import { useDummyIconButtonContext } from '../../common/hooks';

import { DummyIconButtonIconProps } from './common/types';

const DummyIconButtonIcon: FC<DummyIconButtonIconProps> = (props) => {
	const { color, colorMode, size } = useDummyIconButtonContext();

	const fontSize = useIconButtonFontSize({ size });

	return (
		<Icon
			{...props}
			width={`${fontSize}px`}
			height={`${fontSize}px`}
			fontSize={`${fontSize}px`}
			colorMode={colorMode}
			skeletonColor={color}
		/>
	);
};

export default DummyIconButtonIcon;
