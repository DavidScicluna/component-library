import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Card from '../../Card';

export type CardStoryMeta = StorybookMeta<typeof Card>;

export type CardStory = StorybookStory<typeof Card>;
