import type { ReactElement } from 'react';

import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { useStorybookContext } from '../../../../../.storybook/preview';

import type { BackdropOverlayProps } from './common/types';
import type { BackdropOverlayStory, BackdropOverlayStoryMeta } from './common/types/story';
import BackdropOverlayComponent from '.';

export default {
	title: 'Overlay/BackdropOverlay',
	component: BackdropOverlayComponent
} as BackdropOverlayStoryMeta;

export const BackdropOverlay: BackdropOverlayStory = (
	props: BackdropOverlayProps<PolymorphicDefaultElement>
): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return <BackdropOverlayComponent {...props} color={color} colorMode={colorMode} w='100%' h='100%' p={4} />;
};
