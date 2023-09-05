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

	const [isCopied, setIsCopied] = useBoolean();

	const [_value, onCopy] = useCopyToClipboard();

	const handleCopy = useCallback((): void => {
		setIsCopied.on();

		onCopy(value);

		setTimeout(() => setIsCopied.off(), getCopyButtonTimeout(timeout));
	}, [value, timeout]);

	return <Fragment>{children({ isCopied, onCopy: handleCopy })}</Fragment>;
};

export default CopyButton;
