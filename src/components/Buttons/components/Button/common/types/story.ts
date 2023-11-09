import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Button from '../../Button';

export type ButtonStoryMeta = StorybookMeta<typeof Button>;

export type ButtonStory = StorybookStory<typeof Button>;
