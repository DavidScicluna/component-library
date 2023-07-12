import { compact } from 'lodash-es';
import { useInterval } from 'usehooks-ts';

import {
	__DEFAULT_HAS_FILLEDICON_LOADED__,
	__DEFAULT_HAS_OUTLINEDICON_LOADED__,
	__DEFAULT_HAS_TWOTONEICON_LOADED__
} from '../../../../common/constants';
import { useBoolean } from '../../../../common/hooks';
import {
	__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__
} from '../../../../common/keys';
import type { IconCategory } from '../../../DataDisplay/Icon/common/types';

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
	const [hasFilledIconsLoaded, setHasFilledIconsLoaded] = useBoolean(__DEFAULT_HAS_FILLEDICON_LOADED__);
	const [hasOutlinedIconsLoaded, setHasOutlinedIconsLoaded] = useBoolean(__DEFAULT_HAS_OUTLINEDICON_LOADED__);
	const [hasTwoToneIconsLoaded, setHasTwoToneIconsLoaded] = useBoolean(__DEFAULT_HAS_TWOTONEICON_LOADED__);

	const handleCheckFilledIconsStatus = (): void => {
		sessionStorage.removeItem(__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__);

		if (checkFontStatus('filled')) {
			setHasFilledIconsLoaded.on();

			sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__, 'true');
		} else {
			setHasFilledIconsLoaded.off();

			sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__, 'false');
		}
	};

	const handleCheckOutlinedIconsStatus = (): void => {
		sessionStorage.removeItem(__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__);

		if (checkFontStatus('outlined')) {
			setHasOutlinedIconsLoaded.on();

			sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__, 'true');
		} else {
			setHasOutlinedIconsLoaded.off();

			sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__, 'false');
		}
	};

	const handleCheckTwoToneIconsStatus = (): void => {
		sessionStorage.removeItem(__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__);

		if (checkFontStatus('twoTone')) {
			setHasTwoToneIconsLoaded.on();

			sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__, 'true');
		} else {
			setHasTwoToneIconsLoaded.off();

			sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__, 'false');
		}
	};

	useInterval(() => handleCheckFilledIconsStatus(), !hasFilledIconsLoaded ? 1000 : null);
	useInterval(() => handleCheckOutlinedIconsStatus(), !hasOutlinedIconsLoaded ? 1000 : null);
	useInterval(() => handleCheckTwoToneIconsStatus(), !hasTwoToneIconsLoaded ? 1000 : null);

	return { filled: hasFilledIconsLoaded, outlined: hasOutlinedIconsLoaded, twoTone: hasTwoToneIconsLoaded };
};

export default useGetIconFontStatus;
