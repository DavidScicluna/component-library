import { compact } from 'lodash-es';
import { useInterval } from 'usehooks-ts';

import { useBoolean } from '../../../../common/hooks';
import { IconCategory } from '../../../DataDisplay/Icon/common/types';
import {
	hasFilledIconLoaded as defaultHasFilledIconLoaded,
	hasOutlinedIconLoaded as defaultHasOutlinedIconLoaded,
	hasTwoToneIconLoaded as defaultHasTwoToneIconLoaded
} from '../default/props';

type useGetIconFontStatusReturn = Record<IconCategory, boolean>;

const checkFontStatus = (category: IconCategory): boolean =>
	!!document.fonts.check(
		`1rem '${compact([
			'Material Icons',
			category === 'outlined' ? 'Outlined' : null,
			category === 'twoTone' ? 'Two Tone' : null
		]).join(' ')}', sans-serif`
	);

const useGetIconFontStatus = (): useGetIconFontStatusReturn => {
	const [hasFilledIconsLoaded, setHasFilledIconsLoaded] = useBoolean(defaultHasFilledIconLoaded);
	const [hasOutlinedIconsLoaded, setHasOutlinedIconsLoaded] = useBoolean(defaultHasOutlinedIconLoaded);
	const [hasTwoToneIconsLoaded, setHasTwoToneIconsLoaded] = useBoolean(defaultHasTwoToneIconLoaded);

	const handleCheckFilledIconsStatus = (): void => {
		if (checkFontStatus('filled')) {
			setHasFilledIconsLoaded.on();
		} else {
			setHasFilledIconsLoaded.off();
		}
	};

	const handleCheckOutlinedIconsStatus = (): void => {
		if (checkFontStatus('outlined')) {
			setHasOutlinedIconsLoaded.on();
		} else {
			setHasOutlinedIconsLoaded.off();
		}
	};

	const handleCheckTwoToneIconsStatus = (): void => {
		if (checkFontStatus('twoTone')) {
			setHasTwoToneIconsLoaded.on();
		} else {
			setHasTwoToneIconsLoaded.off();
		}
	};

	useInterval(() => handleCheckFilledIconsStatus(), !hasFilledIconsLoaded ? 1000 : null);
	useInterval(() => handleCheckOutlinedIconsStatus(), !hasOutlinedIconsLoaded ? 1000 : null);
	useInterval(() => handleCheckTwoToneIconsStatus(), !hasTwoToneIconsLoaded ? 1000 : null);

	return { filled: hasFilledIconsLoaded, outlined: hasOutlinedIconsLoaded, twoTone: hasTwoToneIconsLoaded };
};

export default useGetIconFontStatus;
