/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';

import { css } from '@emotion/react';
import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_ELEMENT, DEFAULT_POLYMORPHIC_SX } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { useBoxClasses, useBoxResponsiveValues, useBoxStyles } from './common/hooks';
import { KEYS_BOX_CLASS } from './common/keys';
import type { BoxProps, BoxRef } from './common/types';

const Box = forwardRef(function Box<Element extends PolymorphicElementType>(
	props: BoxProps<Element>,
	ref: BoxRef<Element>
): JSX.Element {
	const {
		children,
		as: Component = DEFAULT_POLYMORPHIC_ELEMENT,
		className = DEFAULT_CLASSNAME,
		w: wProp,
		minW: minWProp,
		maxW: maxWProp,
		h: hProp,
		minH: minHProp,
		maxH: maxHProp,
		p: pProp,
		px: pxProp,
		py: pyProp,
		pl: plProp,
		pt: ptProp,
		pr: prProp,
		pb: pbProp,
		m: mProp,
		mx: mxProp,
		my: myProp,
		ml: mlProp,
		mt: mtProp,
		mr: mrProp,
		mb: mbProp,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

	const { w, minW, maxW, h, minH, maxH, p, px, py, pl, pt, pr, pb, m, mx, my, ml, mt, mr, mb } =
		useBoxResponsiveValues({
			w: wProp,
			minW: minWProp,
			maxW: maxWProp,
			h: hProp,
			minH: minHProp,
			maxH: maxHProp,
			p: pProp,
			px: pxProp,
			py: pyProp,
			pl: plProp,
			pt: ptProp,
			pr: prProp,
			pb: pbProp,
			m: mProp,
			mx: mxProp,
			my: myProp,
			ml: mlProp,
			mt: mtProp,
			mr: mrProp,
			mb: mbProp
		});

	const classes = useBoxClasses({ p, px, py, pl, pt, pr, pb, m, mx, my, ml, mt, mr, mb });
	const styles = useBoxStyles({ w, minW, maxW, h, minH, maxH });

	return (
		<Component
			{...rest}
			ref={ref}
			className={classNames(KEYS_BOX_CLASS, classes, { [className]: !!className })}
			css={css(merge(styles, sx))}
		>
			{children}
		</Component>
	);
});

// Box.displayName = 'Box';

export default Box;
