import * as commonConstants from './common/constants';
import { useCopyToClipboard } from './common/hooks';
import type { CopyButtonChildrenProps, CopyButtonProps, CopyButtonTimeout } from './common/types';
import CopyButton from './CopyButton';

// Constants
export const constants = { ...commonConstants };

// Hooks
export { useCopyToClipboard };

// Components
export { CopyButton };

// Component Types
export type { CopyButtonChildrenProps, CopyButtonProps, CopyButtonTimeout };
