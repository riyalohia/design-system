/// <reference types="react" />
export interface ProgressBarProps {
    value: number;
    onChange?: (value: number) => void;
}
export declare const useIsMount: () => boolean;
export declare const ProgressBar: {
    (props: ProgressBarProps): JSX.Element;
    displayName: string;
};
export default ProgressBar;
