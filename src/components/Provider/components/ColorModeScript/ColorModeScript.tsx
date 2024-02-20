import { useEffect } from 'react';

import { __DEFAULT_APP_COLORMODE__ } from '@common/constants';

import { useGetColorMode } from '@components/Provider/common/hooks';

import type { ColorModeScriptProps } from './common/types';

const ColorModeScript = (props: ColorModeScriptProps): JSX.Element => {
	const { initialColorMode = __DEFAULT_APP_COLORMODE__, onSetColorMode } = props;

	const updatedColorMode = useGetColorMode(initialColorMode);

	useEffect(() => onSetColorMode(updatedColorMode), [updatedColorMode]);

	return <></>;
};

ColorModeScript.displayName = 'ColorModeScript';

export default ColorModeScript;
