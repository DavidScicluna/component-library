import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Rating from '../../Rating';

export type RatingStoryMeta = StorybookMeta<typeof Rating>;

export type RatingStory = StorybookStory<typeof Rating>;
