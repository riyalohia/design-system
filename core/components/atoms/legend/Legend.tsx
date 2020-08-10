import * as React from 'react';
import Text, { Appearance as LabelAppearance, } from '@/components/atoms/text';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface LegendProps extends BaseProps {
  /**
   * Describes label of the `Legend`
   */
  children: React.ReactText;
  /**
   * Color of Icon
   * @default "inverse"
   */
  iconAppearance?: string;
  /**
   * Color of label
   */
  labelAppearance?: LabelAppearance;
  /**
   * Size of Icon
   * @default 16
   */
  iconSize?: number;
  /**
   * Denotes weight of `text`
   */
  labelWeight?: 'strong' | 'medium';
  /**
   * Handler to be called when `Legend` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Handler to be called when mouse pointer enters `Legend`.
   */
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Handler to be called when mouse pointer leaves `Legend`.
   */
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Legend = (props: LegendProps) => {
  const {
    iconAppearance = 'inverse',
    iconSize = 16,
    labelAppearance,
    children,
    labelWeight,
    onMouseEnter,
    onMouseLeave,
    onClick,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const legendClass = classNames({
    ['Legend']: true,
  }, className);

  const styles = {
    background: `var(--${iconAppearance})`,
    height: `${iconSize}px`,
    width: `${iconSize}px`,
  };

  return (
    <div
      {...baseProps}
      className={legendClass}
      onClick={e => onClick && onClick(e)}
      onMouseEnter={e => onMouseEnter && onMouseEnter(e)}
      onMouseLeave={e => onMouseLeave && onMouseLeave(e)}
    >
      <span className="Legend-icon" style={styles} />
      <Text
        appearance={labelAppearance}
        weight={labelWeight}
      >
        {children}
      </Text>
    </div>
  );
};

Legend.displayName = 'Legend';

export default Legend;
