import { Transition } from 'framer-motion';
import { memoize } from 'lodash';

import { convertEasingsToArray, convertStringToNumber } from '../../../../common/utils';
import { Theme } from '../../../../theme/types';

type GetConfigProps = { theme: Theme };

export const getConfig = memoize(({ theme }: GetConfigProps): Transition => {
	const duration: number = convertStringToNumber(theme.transition.duration.normal, 'ms') / 1000;
	const easings: number[] = convertEasingsToArray({ easing: theme.transition.easing['ease-in-out'] });

	return { duration, easings };
});
