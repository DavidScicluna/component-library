import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Form from '../../Form';

export type FormStoryMeta = StorybookMeta<typeof Form>;

export type FormStory = StorybookStory<typeof Form>;
