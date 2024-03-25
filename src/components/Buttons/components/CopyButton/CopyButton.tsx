import { Fragment, useCallback } from 'react';

import { useBoolean } from '@common/hooks';

import { DEFAULT_COPY_BUTTON_TIMEOUT } from './common/constants';
import { useCopyToClipboard } from './common/hooks';
import type { CopyButtonProps } from './common/types';
import { getCopyButtonTimeout } from './common/utils';

const CopyButton = (props: CopyButtonProps): JSX.Element => {
	const { children, timeout = DEFAULT_COPY_BUTTON_TIMEOUT, value } = props;

	const [hasCopied, setHasCopied] = useBoolean();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_value, onCopy] = useCopyToClipboard();

	const handleCopy = useCallback((): void => {
		setHasCopied.on();

		onCopy(value);

		setTimeout(() => setHasCopied.off(), getCopyButtonTimeout(timeout));
	}, [value, timeout]);

	return <Fragment>{children({ hasCopied, onCopy: handleCopy })}</Fragment>;
};

// CopyButton.displayName = 'CopyButton';

export default CopyButton;
