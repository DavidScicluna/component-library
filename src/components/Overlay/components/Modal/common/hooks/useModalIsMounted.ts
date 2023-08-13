import { useTimeoutWhen } from 'rooks';

import { useBoolean } from '@common/hooks';
import theme from '@common/theme';
import { convertStringToNumber } from '@common/utils';

import { __DEFAULT_MODAL_DURATION__, __DEFAULT_MODAL_IS_OPEN__ } from '../constants';

const timeout = convertStringToNumber(theme.transitionDuration[__DEFAULT_MODAL_DURATION__], 'ms');

const useModalIsMounted = (isOpen = __DEFAULT_MODAL_IS_OPEN__): boolean => {
	const [isMounted, setIsMounted] = useBoolean(isOpen);

	useTimeoutWhen(() => setIsMounted.on(), timeout, isOpen);
	useTimeoutWhen(() => setIsMounted.off(), timeout, !isOpen);

	return isMounted;
};

export default useModalIsMounted;
