import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type VisuallyHidden from '../../VisuallyHidden';

export type VisuallyHiddenStoryMeta = StorybookMeta<typeof VisuallyHidden>;

export type VisuallyHiddenStory = StorybookStory<typeof VisuallyHidden>;
