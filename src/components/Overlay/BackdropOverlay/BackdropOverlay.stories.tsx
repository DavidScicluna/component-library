/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';

import type { BackdropOverlayProps } from './common/types';
import type { BackdropOverlayStory, BackdropOverlayStoryMeta } from './common/types/story';
import BackdropOverlayComponent from '.';

export default {
	title: 'Overlay/BackdropOverlay',
	component: BackdropOverlayComponent
} as BackdropOverlayStoryMeta;

export const BackdropOverlay: BackdropOverlayStory = (props: BackdropOverlayProps): ReactElement => {
	const padding = classes.spacing.p[4];

	return <BackdropOverlayComponent {...props} className={classNames('w-full', 'h-full', padding)} />;
};
