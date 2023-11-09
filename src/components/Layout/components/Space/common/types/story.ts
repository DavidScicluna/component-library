import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Space from '../../Space';

export type SpaceStoryMeta = StorybookMeta<typeof Space>;

export type SpaceStory = StorybookStory<typeof Space>;
