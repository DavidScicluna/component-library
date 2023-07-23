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
	// argTypes: {
	// 	size: {
	// 		name: 'Size (0-24 | .0, .25, .5 or .75)',
	// 		type: 'number',
	// 		defaultValue: __DEFAULT_BACKDROPOVERLAY_SIZE__,
	// 		// description: '',
	// 		control: { type: 'number' }
	// 	}
	// }
} as BackdropOverlayStoryMeta;

export const BackdropOverlay: BackdropOverlayStory = (props: BackdropOverlayProps<any>): ReactElement => {
	const padding = classes.spacing.p[4];

	return (
		<BackdropOverlayComponent {...props} className={classNames('w-full', 'h-full', padding)}>
			<h6>Hello</h6>
		</BackdropOverlayComponent>
	);
};
