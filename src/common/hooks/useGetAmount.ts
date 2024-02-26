import { useMemo } from 'react';

import type { ThemeAppColorMode } from '@common/types';
import type { GetAmountTypeArr, GetAmountTypeObj } from '@common/utils/amount';
import { getAmount } from '@common/utils/amount';

import useAppTheme from './useAppTheme';

type UseGetAmountProps = {
	colorMode?: ThemeAppColorMode;
	types?: GetAmountTypeArr;
};

const DEFAULT_GET_AMOUNT_TYPES: GetAmountTypeArr = ['active', 'back', 'focus', 'hover'];

const useGetAmount = (props: UseGetAmountProps) => {
	const { colorMode: DEFAULT_GET_COLOR_COLORMODE } = useAppTheme();

	const { colorMode = DEFAULT_GET_COLOR_COLORMODE, types = DEFAULT_GET_AMOUNT_TYPES } = props;

	const amount = useMemo<GetAmountTypeObj>(() => {
		return types
			.map((type) => {
				const t = getAmount(colorMode, type);
				return { key: type, value: t };
			})
			.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {}) as GetAmountTypeObj;
	}, [colorMode, types]);

	return amount;
};

export default useGetAmount;
