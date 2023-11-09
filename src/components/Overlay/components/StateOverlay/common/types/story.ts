import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type StateOverlay from '../../StateOverlay';

export type StateOverlayStoryMeta = StorybookMeta<typeof StateOverlay>;

export type StateOverlayStory = StorybookStory<typeof StateOverlay>;
