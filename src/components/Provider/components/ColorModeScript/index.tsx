import { FC, useEffect } from 'react';

import { colorMode as defaultColorMode } from '../../../../common/default/props';
import { useGetColorMode } from '../../common/hooks';

import { ColorModeScriptProps } from './common/types';

const ColorModeScript: FC<ColorModeScriptProps> = (props) => {
	const { initialColorMode = defaultColorMode, onSetColorMode } = props;

	const updatedColorMode = useGetColorMode(initialColorMode);

	useEffect(() => onSetColorMode(updatedColorMode), [updatedColorMode]);

	return null;
};

export default ColorModeScript;
