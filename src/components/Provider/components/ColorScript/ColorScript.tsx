import { useEffect } from 'react';

import { __DEFAULT_APP_COLOR__ } from '@common/constants';

import { useGetColor } from '@components/Provider/common/hooks';

import type { ColorScriptProps } from './common/types';

const ColorScript = ({ initialColor = __DEFAULT_APP_COLOR__, onSetColor }: ColorScriptProps): JSX.Element => {
	const updatedColor = useGetColor(initialColor);

	useEffect(() => onSetColor(updatedColor), [updatedColor]);

	return <></>;
};

ColorScript.displayName = 'ColorScript';

export default ColorScript;
