import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';

export interface IParagraphProps {
  /**
   * Text to be rendered
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * Color of `paragraph`
   * @default "default"
   */
  appearance?: Appearance ;
}

const Paragraph: React.FunctionComponent<IParagraphProps> = props => {
  const {
    appearance = 'default',
    children,
    ...rest
  } = props;

  const classes = classNames({
    Text: true,
    [`Text--${appearance}`]: appearance
  });

  return (
    <GenericText className={classes} componentType="p" {...rest}>
      {children}
    </GenericText>
  );
};

export default Paragraph;
