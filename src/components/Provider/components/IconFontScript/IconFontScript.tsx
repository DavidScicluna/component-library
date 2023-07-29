import type { FC} from 'react';
import { useEffect } from 'react';

import { useGetIconFontStatus } from '@components/Provider/common/hooks';

import type { IconFontScriptProps } from './common/types';

const IconFontScript: FC<IconFontScriptProps> = (props) => {
	const { filled, outlined, twoTone } = useGetIconFontStatus();

	const { onSetHasFilledIconLoaded, onSetHasOutlinedIconLoaded, onSetHasTwoToneIconLoaded } = props;

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

	useEffect(() => {
		if (twoTone) {
			onSetHasTwoToneIconLoaded.on();
		} else {
			onSetHasTwoToneIconLoaded.off();
		}
	}, [twoTone]);

	return null;
};

export default IconFontScript;
