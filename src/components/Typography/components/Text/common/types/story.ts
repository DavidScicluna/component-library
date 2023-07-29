import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Text from '../../Text';

export type TextStoryMeta = StorybookMeta<typeof Text>;

export type TextStory = StorybookStory<typeof Text>;
