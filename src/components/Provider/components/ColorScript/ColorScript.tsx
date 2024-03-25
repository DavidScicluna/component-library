import { Fragment, useEffect } from 'react';

import { DEFAULT_APP_COLOR } from '@common/constants';

import { useGetColor } from '@components/Provider/common/hooks';

import type { ColorScriptProps } from './common/types';

const ColorScript = ({ initialColor = DEFAULT_APP_COLOR, onSetColor }: ColorScriptProps): JSX.Element => {
	const updatedColor = useGetColor(initialColor);

	useEffect(() => onSetColor(updatedColor), [updatedColor]);

	return <Fragment />;
};

// ColorScript.displayName = 'ColorScript';

export default ColorScript;
