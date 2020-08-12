import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type Appearance = 'default' | 'subtle' | 'disabled' | 'white';
export interface SubheadingProps extends BaseProps {
    children: React.ReactText;
    appearance?: Appearance;
}
export declare const Subheading: {
    (props: SubheadingProps): JSX.Element;
    displayName: string;
};
export default Subheading;
