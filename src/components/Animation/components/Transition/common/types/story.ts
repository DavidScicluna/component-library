import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Transition from '../../Transition';

export type TransitionStoryMeta = StorybookMeta<typeof Transition>;

export type TransitionStory = StorybookStory<typeof Transition>;
