import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type DummyTabs from '../../DummyTabs';

export type DummyTabsStoryMeta = StorybookMeta<typeof DummyTabs>;

export type DummyTabsStory = StorybookStory<typeof DummyTabs>;
