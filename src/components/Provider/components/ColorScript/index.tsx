import { FC } from 'react';

import { color as defaultColor } from '../../../../common/default/props';
import { useGetColor } from '../../common/hooks';

import { ColorScriptProps } from './common/types';

const ColorScript: FC<ColorScriptProps> = (props) => {
	const { initialColor = defaultColor } = props;

	useGetColor(initialColor);

	return null;
};

export default ColorScript;
