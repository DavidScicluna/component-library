import { range } from 'lodash-es';

type Year = number;
type Years = Year[];

const years: Years = range(1900, 2100);

export default years;
