import { useGetResponsiveValue } from '@common/hooks';

import type { BoxNonResponsiveValueProps, BoxResponsiveValueProps } from '../types';

type UseBoxResponsiveValuesProps = Partial<BoxResponsiveValueProps>;
type UseBoxResponsiveValuesReturn = BoxNonResponsiveValueProps;

const useBoxResponsiveValues = (props: UseBoxResponsiveValuesProps): UseBoxResponsiveValuesReturn => {
	const {
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
	} = props;

	const w = useGetResponsiveValue<BoxNonResponsiveValueProps['w']>(wProp);
	const minW = useGetResponsiveValue<BoxNonResponsiveValueProps['minW']>(minWProp);
	const maxW = useGetResponsiveValue<BoxNonResponsiveValueProps['maxW']>(maxWProp);
	const h = useGetResponsiveValue<BoxNonResponsiveValueProps['h']>(hProp);
	const minH = useGetResponsiveValue<BoxNonResponsiveValueProps['minH']>(minHProp);
	const maxH = useGetResponsiveValue<BoxNonResponsiveValueProps['maxH']>(maxHProp);
	const p = useGetResponsiveValue<BoxNonResponsiveValueProps['p']>(pProp);
	const px = useGetResponsiveValue<BoxNonResponsiveValueProps['px']>(pxProp);
	const py = useGetResponsiveValue<BoxNonResponsiveValueProps['py']>(pyProp);
	const pl = useGetResponsiveValue<BoxNonResponsiveValueProps['pl']>(plProp);
	const pt = useGetResponsiveValue<BoxNonResponsiveValueProps['pt']>(ptProp);
	const pr = useGetResponsiveValue<BoxNonResponsiveValueProps['pr']>(prProp);
	const pb = useGetResponsiveValue<BoxNonResponsiveValueProps['pb']>(pbProp);
	const m = useGetResponsiveValue<BoxNonResponsiveValueProps['m']>(mProp);
	const mx = useGetResponsiveValue<BoxNonResponsiveValueProps['mx']>(mxProp);
	const my = useGetResponsiveValue<BoxNonResponsiveValueProps['my']>(myProp);
	const ml = useGetResponsiveValue<BoxNonResponsiveValueProps['ml']>(mlProp);
	const mt = useGetResponsiveValue<BoxNonResponsiveValueProps['mt']>(mtProp);
	const mr = useGetResponsiveValue<BoxNonResponsiveValueProps['mr']>(mrProp);
	const mb = useGetResponsiveValue<BoxNonResponsiveValueProps['mb']>(mbProp);

	return { w, minW, maxW, h, minH, maxH, p, px, py, pl, pt, pr, pb, m, mx, my, ml, mt, mr, mb };
};

export default useBoxResponsiveValues;
