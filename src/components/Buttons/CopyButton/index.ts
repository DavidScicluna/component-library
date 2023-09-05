import { __DEFAULT_COPY_BUTTON_DURATION__, __DEFAULT_COPY_BUTTON_TIMEOUT__ } from './common/constants';
import { useCopyToClipboard } from './common/hooks';
import type { CopyButtonChildrenProps, CopyButtonProps, CopyButtonTimeout } from './common/types';
import CopyButton from './CopyButton';

// Constants
export const constants = {
	__DEFAULT_COPY_BUTTON_DURATION__,
	__DEFAULT_COPY_BUTTON_TIMEOUT__
};

// Hooks
export { useCopyToClipboard };

// Components
export { CopyButton };

// Component Types
export type { CopyButtonChildrenProps, CopyButtonProps, CopyButtonTimeout };
