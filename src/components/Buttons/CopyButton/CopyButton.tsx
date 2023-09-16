/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FC } from 'react';
import { Fragment, useCallback } from 'react';

import { useBoolean } from '@common/hooks';

import { __DEFAULT_COPY_BUTTON_TIMEOUT__ } from './common/constants';
import { useCopyToClipboard } from './common/hooks';
import type { CopyButtonProps } from './common/types';
import { getCopyButtonTimeout } from './common/utils';

const CopyButton: FC<CopyButtonProps> = (props) => {
	const { children, timeout = __DEFAULT_COPY_BUTTON_TIMEOUT__, value } = props;

	const [hasCopied, setHasCopied] = useBoolean();

	const [_value, onCopy] = useCopyToClipboard();

	const handleCopy = useCallback((): void => {
		setHasCopied.on();

		onCopy(value);

		setTimeout(() => setHasCopied.off(), getCopyButtonTimeout(timeout));
	}, [value, timeout]);

	return <Fragment>{children({ hasCopied, onCopy: handleCopy })}</Fragment>;
};

export default CopyButton;
