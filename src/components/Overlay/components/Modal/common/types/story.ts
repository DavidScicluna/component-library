import type { Meta as StorybookMeta, StoryFn as StorybookStory } from '@storybook/react';

import type Modal from '../../Modal';

export type ModalStoryMeta = StorybookMeta<typeof Modal>;

export type ModalStory = StorybookStory<typeof Modal>;
