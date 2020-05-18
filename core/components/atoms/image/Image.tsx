import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';

export interface ImageProps {
  name: string;
  size?: number;
}

export const Image = (props: ImageProps) => {
  const {
    size = 16,
    name,
  } = props;

  const classes = classNames({
    Image: true,
  });

  const style = {
    height: `${size * 2}px`,
    width: `${size * 2}px`,
  }

  return (
    <span className={classes} style={style}>
      <Icon name={name} size={size} />
    </span>
  );
};

Image.displayName = 'Image';

export default Image;
