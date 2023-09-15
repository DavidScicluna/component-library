import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { useMergeRefs } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Fade } from '@components/Animation';
import { Center } from '@components/Layout';

import { HorizontalScrollArrowIconButton } from '../HorizontalScrollArrowIconButton';

import { useHorizontalScrollOverlayArrowIconButtonClasses } from './common/hooks';
import { __KEYS_HORIZONTAL_SCROLL_OVERLAY_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	HorizontalScrollOverlayArrowIconButtonDefaultElement,
	HorizontalScrollOverlayArrowIconButtonElement,
	HorizontalScrollOverlayArrowIconButtonProps,
	HorizontalScrollOverlayArrowIconButtonRef
} from './common/types';

const HorizontalScrollOverlayArrowIconButton = forwardRef(function HorizontalScrollOverlayArrowIconButton<
	Element extends HorizontalScrollOverlayArrowIconButtonElement = HorizontalScrollOverlayArrowIconButtonDefaultElement
>(
	props: HorizontalScrollOverlayArrowIconButtonProps<Element>,
	ref: HorizontalScrollOverlayArrowIconButtonRef<Element>
): ReactElement {
	const [internalRef, { width: internalWidth }] =
		useElementSize<HorizontalScrollOverlayArrowIconButtonRef<Element>>();

	const refs = useMergeRefs<HorizontalScrollOverlayArrowIconButtonRef<Element>>(ref, internalRef);

	const { className = __DEFAULT_CLASSNAME__, color, colorMode, direction, isVisible = false, ...rest } = props;

	const classes = useHorizontalScrollOverlayArrowIconButtonClasses<Element>({ color, colorMode, direction });

	return (
		<Fade w={`${internalWidth * 2}px`} h='100%' in={isVisible}>
			<Center
				className={classNames(__KEYS_HORIZONTAL_SCROLL_OVERLAY_ARROW_ICON_BUTTON_CLASS__, classes, {
					[className]: !!className
				})}
				w='100%'
				h='100%'
			>
				<HorizontalScrollArrowIconButton<Element> {...rest} ref={refs} direction={direction} />
			</Center>
		</Fade>
	);
});

export default HorizontalScrollOverlayArrowIconButton;
