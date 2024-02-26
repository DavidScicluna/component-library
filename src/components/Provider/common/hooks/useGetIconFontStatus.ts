import { useInterval } from 'usehooks-ts';

import {
	DEFAULT_HAS_FILLEDICON_LOADED,
	DEFAULT_HAS_OUTLINEDICON_LOADED,
	DEFAULT_HAS_TWOTONEICON_LOADED
} from '@common/constants';
import { useBoolean } from '@common/hooks';
import {
	KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED,
	KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED,
	KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED
} from '@common/keys';
import { getIconFontFamily } from '@common/utils';

import type { IconCategory } from '@components/DataDisplay';

type useGetIconFontStatusReturn = Record<IconCategory, boolean>;

const checkFontStatus = (category: IconCategory): boolean => {
	return document.fonts.check(`1rem ${getIconFontFamily(category)}`);
};

const useGetIconFontStatus = (): useGetIconFontStatusReturn => {
	const [hasFilledIconsLoaded, setHasFilledIconsLoaded] = useBoolean(DEFAULT_HAS_FILLEDICON_LOADED);
	const [hasOutlinedIconsLoaded, setHasOutlinedIconsLoaded] = useBoolean(DEFAULT_HAS_OUTLINEDICON_LOADED);
	const [hasTwoToneIconsLoaded, setHasTwoToneIconsLoaded] = useBoolean(DEFAULT_HAS_TWOTONEICON_LOADED);

	const handleCheckFilledIconsStatus = (): void => {
		if (typeof window !== 'undefined') {
			window.sessionStorage.removeItem(KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED);

			if (checkFontStatus('filled')) {
				setHasFilledIconsLoaded.on();

				window.sessionStorage.setItem(KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED, 'true');
			} else {
				setHasFilledIconsLoaded.off();

				window.sessionStorage.setItem(KEY_SESSIONSTORAGE_HAS_FILLEDICON_LOADED, 'false');
			}
		}
	};

	const handleCheckOutlinedIconsStatus = (): void => {
		if (typeof window !== 'undefined') {
			window.sessionStorage.removeItem(KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED);

			if (checkFontStatus('outlined')) {
				setHasOutlinedIconsLoaded.on();

				window.sessionStorage.setItem(KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED, 'true');
			} else {
				setHasOutlinedIconsLoaded.off();

				window.sessionStorage.setItem(KEY_SESSIONSTORAGE_HAS_OUTLINEDICON_LOADED, 'false');
			}
		}
	};

	const handleCheckTwoToneIconsStatus = (): void => {
		if (typeof window !== 'undefined') {
			window.sessionStorage.removeItem(KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED);

			if (checkFontStatus('twoTone')) {
				setHasTwoToneIconsLoaded.on();

				window.sessionStorage.setItem(KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED, 'true');
			} else {
				setHasTwoToneIconsLoaded.off();

				window.sessionStorage.setItem(KEY_SESSIONSTORAGE_HAS_TWOTONEICON_LOADED, 'false');
			}
		}
	};

	useInterval(() => handleCheckFilledIconsStatus(), !hasFilledIconsLoaded ? 1000 : null);
	useInterval(() => handleCheckOutlinedIconsStatus(), !hasOutlinedIconsLoaded ? 1000 : null);
	useInterval(() => handleCheckTwoToneIconsStatus(), !hasTwoToneIconsLoaded ? 1000 : null);

	return { filled: hasFilledIconsLoaded, outlined: hasOutlinedIconsLoaded, twoTone: hasTwoToneIconsLoaded };
};

export default useGetIconFontStatus;
