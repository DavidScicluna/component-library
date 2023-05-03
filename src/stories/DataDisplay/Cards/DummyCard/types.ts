import { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import { DummyCard } from '../../../..';

export type Meta = StorybookMeta<typeof DummyCard>;

export type Story = StorybookStory<typeof DummyCard>;
