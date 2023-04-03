export type Status = 'idle' | 'success' | 'error' | 'warning' | 'active';

export type Step = {
	index: number;
	title: string;
	subtitle?: string;
	status: Status;
	isDisabled?: boolean;
};

export type StepProps = Step & {
	onClick: () => void;
};
