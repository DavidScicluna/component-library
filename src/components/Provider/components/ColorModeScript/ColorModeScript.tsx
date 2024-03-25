import { Fragment, useEffect } from 'react';

import { DEFAULT_APP_COLORMODE } from '@common/constants';

import { useGetColorMode } from '@components/Provider/common/hooks';

import type { ColorModeScriptProps } from './common/types';

const ColorModeScript = (props: ColorModeScriptProps): JSX.Element => {
	const { initialColorMode = DEFAULT_APP_COLORMODE, onSetColorMode } = props;

	const updatedColorMode = useGetColorMode(initialColorMode);

	useEffect(() => onSetColorMode(updatedColorMode), [updatedColorMode]);

	return <Fragment />;
};

// ColorModeScript.displayName = 'ColorModeScript';

export default ColorModeScript;
