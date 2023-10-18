import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Popper from '../../Popper';

export type PopperStoryMeta = StorybookMeta<typeof Popper>;

export type PopperStory = StorybookStory<typeof Popper>;
