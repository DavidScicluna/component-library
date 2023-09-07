import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type DummyButton from '../../DummyButton';

export type DummyButtonStoryMeta = StorybookMeta<typeof DummyButton>;

export type DummyButtonStory = StorybookStory<typeof DummyButton>;
