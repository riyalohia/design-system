import * as React from 'react';
import Modal, { Dimension } from '@/components/molecules/modal';
import ModalHeader from '@/components/molecules/modalHeader';
import ModalDescription from '@/components/molecules/modalDescription';
import ModalFooter from '@/components/molecules/modalFooter';
import Button, { Appearance } from '@/components/atoms/button';

export interface IDialogProps {
  /**
   * Callback for `dialog` close event
   */
  onClose: (reason?: string, event?: Event | React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * closes `dialog` on pressing escape key
   */
  closeOnEscape?: boolean;
  /**
   * Dimension of `dialog`
   * @default "small"
   */
  dimension?: Dimension;
  /**
   * Handles open/close
   */
  open: boolean;
  heading?: string;
  /**
   * Material icon name
   */
  icon?: string;
  /**
   * Dialog's header title
   */
  title?: string;
  /**
   * Description inside `dialog`
   */
  description?: string;
  /**
   * Label of first button inside `dialog`
   */
  primaryButtonLabel: string;
  /**
   * Color of second button inside `dialog`
   * @default "primary"
   */
  primaryButtonAppearance?: Appearance;
  /**
   * Handler to be called when first button is clicked
   */
  primaryButtonCallback: () => void;
  /**
   * Label of second button inside `dialog`
   */
  secondaryButtonLabel: string;
  /**
   * Color of second button inside `dialog`
   * @default "basic"
   */
  secondaryButtonAppearance?: Appearance;
  /**
   * Handler to be called when second button is clicked
   */
  secondaryButtonCallback: () => void;
}

const Dialog: React.FunctionComponent<IDialogProps> = props => {
  const {
    dimension = 'small',
    primaryButtonAppearance = 'primary',
    secondaryButtonAppearance = 'basic',
    open,
    onClose,
    icon,
    heading = '',
    title = '',
    description = '',
    primaryButtonLabel,
    primaryButtonCallback,
    secondaryButtonLabel,
    secondaryButtonCallback } = props;

  const modalOptions = {
    open,
    onClose,
    dimension
  };

  const modalHeaderOptions = {
    onClose,
    icon,
    heading
  };

  const modalDescriptionOptions = {
    title,
    description
  };

  return (
    <Modal {...modalOptions} >
      <ModalHeader {...modalHeaderOptions} />
      <ModalDescription {...modalDescriptionOptions} />
      <ModalFooter>
        <Button appearance={secondaryButtonAppearance} onClick={secondaryButtonCallback}>{secondaryButtonLabel}</Button>
        <Button appearance={primaryButtonAppearance} onClick={primaryButtonCallback}>{primaryButtonLabel}</Button>
      </ModalFooter>
    </Modal>
  );
};

export default Dialog;
