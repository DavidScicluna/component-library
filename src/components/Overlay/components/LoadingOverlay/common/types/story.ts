import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type LoadingOverlay from '../../LoadingOverlay';

export type LoadingOverlayStoryMeta = StorybookMeta<typeof LoadingOverlay>;

export type LoadingOverlayStory = StorybookStory<typeof LoadingOverlay>;
