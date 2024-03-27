import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import type { BoxOtherProps } from '../types';

import useBoxResponsiveValues from './useBoxResponsiveValues';

type UseBoxClassesProps = BoxOtherProps;
type UseBoxClassesReturn = ClassName;

const useBoxClasses = (props: UseBoxClassesProps): UseBoxClassesReturn => {
	const {
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

	const { p, px, py, pl, pt, pr, pb, m, mx, my, ml, mt, mr, mb } = useBoxResponsiveValues({
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

	const pClassName = useGetClass((classes) => (p ? classes.spacing.p[p] : ''));
	const pxClassName = useGetClass((classes) => (px ? classes.spacing.px[px] : ''));
	const pyClassName = useGetClass((classes) => (py ? classes.spacing.py[py] : ''));
	const plClassName = useGetClass((classes) => (pl ? classes.spacing.pl[pl] : ''));
	const ptClassName = useGetClass((classes) => (pt ? classes.spacing.pt[pt] : ''));
	const prClassName = useGetClass((classes) => (pr ? classes.spacing.pr[pr] : ''));
	const pbClassName = useGetClass((classes) => (pb ? classes.spacing.pb[pb] : ''));

	const mClassName = useGetClass((classes) => (m ? classes.spacing.m[m] : ''));
	const mxClassName = useGetClass((classes) => (mx ? classes.spacing.mx[mx] : ''));
	const myClassName = useGetClass((classes) => (my ? classes.spacing.my[my] : ''));
	const mlClassName = useGetClass((classes) => (ml ? classes.spacing.ml[ml] : ''));
	const mtClassName = useGetClass((classes) => (mt ? classes.spacing.mt[mt] : ''));
	const mrClassName = useGetClass((classes) => (mr ? classes.spacing.mr[mr] : ''));
	const mbClassName = useGetClass((classes) => (mb ? classes.spacing.mb[mb] : ''));

	return classNames({
		[pClassName]: !!p,
		[pxClassName]: !!px,
		[pyClassName]: !!py,
		[plClassName]: !!pl,
		[ptClassName]: !!pt,
		[prClassName]: !!pr,
		[pbClassName]: !!pb,
		[mClassName]: !!m,
		[mxClassName]: !!mx,
		[myClassName]: !!my,
		[mlClassName]: !!ml,
		[mtClassName]: !!mt,
		[mrClassName]: !!mr,
		[mbClassName]: !!mb
	});
};

export default useBoxClasses;
