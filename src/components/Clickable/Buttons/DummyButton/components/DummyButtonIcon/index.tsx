import { forwardRef, ReactElement } from 'react';

import Icon from '../../../../../DataDisplay/Icon';
import { useButtonFontSize } from '../../../common/hooks';
import { useDummyButtonContext } from '../../common/hooks';

import { DummyButtonIconProps, DummyButtonIconRef } from './common/types';

const DummyButtonIcon = forwardRef<DummyButtonIconRef, DummyButtonIconProps>(function DummyButtonIcon(
	props,
	ref
): ReactElement {
	const { color, colorMode, size } = useDummyButtonContext();

	const fontSize = useButtonFontSize({ size });

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

export default DummyButtonIcon;
