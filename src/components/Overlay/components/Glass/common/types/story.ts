import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Glass from '../../Glass';

export type GlassStoryMeta = StorybookMeta<typeof Glass>;

export type GlassStory = StorybookStory<typeof Glass>;
