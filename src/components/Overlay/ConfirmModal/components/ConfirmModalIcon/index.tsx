import { forwardRef, ReactElement } from 'react';

import Icon from '../../../../DataDisplay/Icon';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalIconProps, ConfirmModalIconRef } from './common/types';

const ConfirmModalIcon = forwardRef<ConfirmModalIconRef, ConfirmModalIconProps>(
	function ConfirmModalIcon(props, ref): ReactElement  {
	const { color, colorMode } = useConfirmModalContext();

	return <Icon {...props} ref={ref} color={color} colorMode={colorMode} />;
});

export default ConfirmModalIcon;
