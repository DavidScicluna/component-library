import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Message from '../../Message';

export type MessageStoryMeta = StorybookMeta<typeof Message>;

export type MessageStory = StorybookStory<typeof Message>;
