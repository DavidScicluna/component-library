import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Alert from '../../Alert';

export type AlertStoryMeta = StorybookMeta<typeof Alert>;

export type AlertStory = StorybookStory<typeof Alert>;
