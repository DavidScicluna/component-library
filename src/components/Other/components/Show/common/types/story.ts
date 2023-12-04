import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Show from '../../Show';

export type ShowStoryMeta = StorybookMeta<typeof Show>;

export type ShowStory = StorybookStory<typeof Show>;
