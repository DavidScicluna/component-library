import { forwardRef, ReactElement } from 'react';

import Icon from '../../../../../DataDisplay/Icon';
import { useIconButtonFontSize } from '../../../common/hooks';
import { useDummyIconButtonContext } from '../../common/hooks';

import { DummyIconButtonIconProps, DummyIconButtonIconRef } from './common/types';

const DummyIconButtonIcon = forwardRef<DummyIconButtonIconRef, DummyIconButtonIconProps>(
	function DummyIconButtonIcon(props, ref): ReactElement {
	const { color, colorMode, size } = useDummyIconButtonContext();

	const fontSize = useIconButtonFontSize({ size });

	return (
		<Icon
			{...props}
			ref={ref}
			color={color}
			colorMode={colorMode}
			width={`${fontSize}px`}
			height={`${fontSize}px`}
			fontSize={`${fontSize}px`}
			variant='unstyled'
		/>
	);
});

export default DummyIconButtonIcon;
