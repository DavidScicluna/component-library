import { FC, useEffect } from 'react';

import { __DEFAULT_APP_COLOR__ } from '../../../../common/constants';
import { useGetColor } from '../../common/hooks';

import type { ColorScriptProps } from './common/types';

const ColorScript: FC<ColorScriptProps> = ({ initialColor = __DEFAULT_APP_COLOR__, onSetColor }) => {
	const updatedColor = useGetColor(initialColor);

	useEffect(() => onSetColor(updatedColor), [updatedColor]);

	return null;
};

export default ColorScript;
