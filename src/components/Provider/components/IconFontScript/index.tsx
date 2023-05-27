import { FC, useEffect } from 'react';

import { useGetIconFontStatus } from '../../common/hooks';

import { IconFontScriptProps } from './common/types';

const IconFontScript: FC<IconFontScriptProps> = ({ onSetHasFilledIconLoaded, onSetHasOutlinedIconLoaded }) => {
	const { filled, outlined } = useGetIconFontStatus();

	useEffect(() => {
		if (filled) {
			onSetHasFilledIconLoaded.on();
		} else {
			onSetHasFilledIconLoaded.off();
		}
	}, [filled]);

	useEffect(() => {
		if (outlined) {
			onSetHasOutlinedIconLoaded.on();
		} else {
			onSetHasOutlinedIconLoaded.off();
		}
	}, [outlined]);

	return null;
};

export default IconFontScript;
