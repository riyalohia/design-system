import * as React from 'react';
import classNames from 'classnames';
import Heading from '@/components/atoms/heading';
import Text from '@/components/atoms/text';
import Icon from '@/components/atoms/icon';
import ActionButton from './ActionButton';

export type Appearance = 'default' | 'info' | 'success' | 'alert' | 'warning';

export type Action = {
  /**
   * Label of `ActionButton`
   */
  label: string,
  /**
   * Click Handler
   */
  onClick: (e: React.MouseEvent) => void
};

export interface ToastProps {
  /**
   * Title of `toast`
   */
  title: string;
  /**
   * Color of `toast`
   * @default "default"
   */
  appearance?: Appearance;
  /**
   * Message to be rendered inside `toast`
   */
  message?: string;
  /**
   * Array for `ActionButton`(maxLen: 2)
   *
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * Action: {
   *    label: string,
   *    onClick: (e: React.MouseEvent) => void
   * }
   * </pre>
   */
  actions?: Action[];
  onClose?: () => void;
}

export const Toast: React.FunctionComponent<ToastProps> = props => {
  const {
    appearance = 'default',
    title,
    message,
    actions,
    onClose,
  } = props;

  const wrapperClass = classNames({
    ['Toast']: true,
    [`Toast--${appearance}`]: appearance,
  });

  const IconMapping: Record<string, any> = {
    info: 'info',
    success: 'check_circle',
    alert: 'info',
    warning: 'info'
  };

  const icon = IconMapping[appearance];

  const titleClass = classNames({
    ['Toast-title']: true,
    ['Toast-title--withMessage']: message
  });

  const iconClass = (align: string) => classNames({
    ['Toast-icon']: true,
    [`Toast-icon--${align}`]: align
  });

  const onCloseHandler = () => {
    if (onClose) onClose();
  };

  return (
    <div className={wrapperClass}>
      {icon && (
        <div className={iconClass('left')}>
          <Icon name={icon} size={16} appearance={appearance !== 'warning' ? 'white' : 'default'} />
        </div>
      )}
      <div className="Toast-body">
        <div className={titleClass}>
          <Heading
            appearance={appearance !== 'warning' ? 'white' : 'default'}
          >
            {title}
          </Heading>
          <div onClick={onCloseHandler}>
            <div className={iconClass('right')}><Icon name={'close'} size={16} /></div>
          </div>
        </div>
        {message && (
          <div className="Toast-message">
            <Text
              appearance={appearance !== 'warning' ? 'white' : 'default'}
            >
              {message}
            </Text>
          </div>
        )}
        {!!actions?.length && (
          <div className="Toast-actions">
            {actions.slice(0, 2).map((action, index) => (
              <ActionButton
                key={index}
                label={action!.label}
                appearance={appearance}
                onClick={action!.onClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Toast.displayName = 'Toast';

export default Toast;
