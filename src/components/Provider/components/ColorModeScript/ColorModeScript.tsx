import type { FC } from 'react';
import { useEffect } from 'react';

import { __DEFAULT_APP_COLORMODE__ } from '@common/constants';

import { useGetColorMode } from '@components/Provider/common/hooks';

import type { ColorModeScriptProps } from './common/types';

const ColorModeScript: FC<ColorModeScriptProps> = ({
	initialColorMode = __DEFAULT_APP_COLORMODE__,
	onSetColorMode
}) => {
	const updatedColorMode = useGetColorMode(initialColorMode);

	useEffect(() => onSetColorMode(updatedColorMode), [updatedColorMode]);

	return null;
};

export default ColorModeScript;
