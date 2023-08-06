import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Headline from '../../Headline';

export type HeadlineStoryMeta = StorybookMeta<typeof Headline>;

export type HeadlineStory = StorybookStory<typeof Headline>;
