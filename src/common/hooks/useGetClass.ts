import classes from '@common/classes';

type Classes = typeof classes;

/**
 * This hook will give the ability to find the class needed from the classes object
 *
 * @param callback - An function that returns all the classes
 * @returns - The class from the classes object
 */
const useGetClass = (callback: (classes: Classes) => string): string => {
	return callback(classes);
};

export default useGetClass;
