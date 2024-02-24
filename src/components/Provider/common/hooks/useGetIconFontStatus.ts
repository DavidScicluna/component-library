import { useInterval } from 'usehooks-ts';

import {
	__DEFAULT_HAS_FILLEDICON_LOADED__,
	__DEFAULT_HAS_OUTLINEDICON_LOADED__,
	__DEFAULT_HAS_TWOTONEICON_LOADED__
} from '@common/constants';
import { useBoolean } from '@common/hooks';
import {
	__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__,
	__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__
} from '@common/keys';
import { getIconFontFamily } from '@common/utils';

import type { IconCategory } from '@components/DataDisplay';

type useGetIconFontStatusReturn = Record<IconCategory, boolean>;

const checkFontStatus = (category: IconCategory): boolean => {
	return document.fonts.check(`1rem ${getIconFontFamily(category)}`);
};

const useGetIconFontStatus = (): useGetIconFontStatusReturn => {
	const [hasFilledIconsLoaded, setHasFilledIconsLoaded] = useBoolean(__DEFAULT_HAS_FILLEDICON_LOADED__);
	const [hasOutlinedIconsLoaded, setHasOutlinedIconsLoaded] = useBoolean(__DEFAULT_HAS_OUTLINEDICON_LOADED__);
	const [hasTwoToneIconsLoaded, setHasTwoToneIconsLoaded] = useBoolean(__DEFAULT_HAS_TWOTONEICON_LOADED__);

	const handleCheckFilledIconsStatus = (): void => {
		if (typeof window !== 'undefined') {
			window.sessionStorage.removeItem(__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__);

			if (checkFontStatus('filled')) {
				setHasFilledIconsLoaded.on();

				window.sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__, 'true');
			} else {
				setHasFilledIconsLoaded.off();

				window.sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED__, 'false');
			}
		}
	};

	const handleCheckOutlinedIconsStatus = (): void => {
		if (typeof window !== 'undefined') {
			window.sessionStorage.removeItem(__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__);

			if (checkFontStatus('outlined')) {
				setHasOutlinedIconsLoaded.on();

				window.sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__, 'true');
			} else {
				setHasOutlinedIconsLoaded.off();

				window.sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED__, 'false');
			}
		}
	};

	const handleCheckTwoToneIconsStatus = (): void => {
		if (typeof window !== 'undefined') {
			window.sessionStorage.removeItem(__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__);

			if (checkFontStatus('twoTone')) {
				setHasTwoToneIconsLoaded.on();

				window.sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__, 'true');
			} else {
				setHasTwoToneIconsLoaded.off();

				window.sessionStorage.setItem(__KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED__, 'false');
			}
		}
	};

	useInterval(() => handleCheckFilledIconsStatus(), !hasFilledIconsLoaded ? 1000 : null);
	useInterval(() => handleCheckOutlinedIconsStatus(), !hasOutlinedIconsLoaded ? 1000 : null);
	useInterval(() => handleCheckTwoToneIconsStatus(), !hasTwoToneIconsLoaded ? 1000 : null);

	return { filled: hasFilledIconsLoaded, outlined: hasOutlinedIconsLoaded, twoTone: hasTwoToneIconsLoaded };
};

export default useGetIconFontStatus;
