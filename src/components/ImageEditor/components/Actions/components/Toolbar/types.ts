import { ContextType } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { ActionsProps } from '../../types';

export type ScrollContext = ContextType<typeof VisibilityContext>;

export type ToolbarProps = Pick<ActionsProps, 'onSelectTool' | 'onZoom'>;
