import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Progress from '../../Progress';

export type ProgressStoryMeta = StorybookMeta<typeof Progress>;

export type ProgressStory = StorybookStory<typeof Progress>;
