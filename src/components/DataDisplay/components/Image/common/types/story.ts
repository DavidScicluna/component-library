import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Image from '../../Image';

export type ImageStoryMeta = StorybookMeta<typeof Image>;

export type ImageStory = StorybookStory<typeof Image>;
