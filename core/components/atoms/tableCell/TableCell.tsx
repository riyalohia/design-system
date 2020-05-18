import * as React from 'react';
import Text from '@/components/atoms/text';
import classNames from 'classnames';
import StatusHints, { Appearance as StatusAppearance } from '@/components/atoms/statusHints';
import Avatar, { AvatarProps } from '@/components/atoms/avatar';
import Checkbox, { CheckboxProps } from '@/components/atoms/checkbox';
import Dropdown, { DropdownProps } from '@/components/atoms/dropdown';
import Input, { InputProps } from '@/components/atoms/input';
import Icon, { IconProps } from '@/components/atoms/icon';
import Image from '@/components/atoms/image';

export type Alignment = 'left' | 'right' | 'center';

export type Data = Record<string, any>;

export interface Schema {
  name: string;
  displayName: string;
  width: number;
  get?: (a: Data) => any;
  comparator?: (a: any, b: any) => number;
  pinned?: boolean;
  hidden?: boolean;
  //filterList?: DropdownProps['options'];
  avatar?: AvatarProps;
  checkbox?: CheckboxProps;
  image?: string;
  status?: StatusAppearance;
  icon?: IconProps;
  dropdown?: DropdownProps;
  input?: InputProps;
  align?: Alignment;
}


export interface TableCellProps {
  data: Data;
  schema: Schema;
  rowIndex: number;
  seperator?: boolean;
}

export const TableCell = (props: TableCellProps) => {
  const {
    schema,
    data,
    rowIndex,
    seperator,
  } = props;

  const { name, avatar, checkbox, icon, dropdown, input, align, image, status } = schema;
  const { label, ...checkboxOptions } = checkbox ? checkbox : { label: '' };
  const { appearance = 'primary' } = avatar ? avatar : {};
  const cellData = data[name] !== undefined ? data[name] : rowIndex;
  const { text, metaData } = cellData;

  const CellClass = classNames({
    ['TableCell-wrapper']: true,
    ['TableCell-checkboxOnly']: checkbox && !avatar && !image,
    ['TableCell-avatarOnly']: !checkbox && avatar && !image,
    ['TableCell-imageOnly']: !checkbox && !avatar && image,
    [`TableCell--${align}`]: align && !checkbox && !avatar && !image,
  });

  const TableCellClass = classNames({
    ['TableCell']: true,
    ['TableCell-seperator']: seperator,
    ['TableCell-status']: status,
  });

  const TableCellWrapperClass = classNames({
    ['TableCell-textwrapper']: true,
    ['TableCell-textwrapper--image']: avatar || checkbox || image,
  });


  const renderMetaData = () => {
    if (typeof metaData === 'string') {
      return (
        <Text appearance={'subtle'} small={true}>
          {metaData}
        </Text>
      );
    }
    return metaData;
  };

  const renderCellData = () => {
    return (
      <div className={CellClass}>
        {checkbox && (
          <Checkbox
            label={''}
            {...checkboxOptions}
          />
        )}
        {image && (
          <Image name={image} />
        )}
        {avatar && (
          <Avatar
            appearance={appearance}
          >
            {avatar.children}
          </Avatar>
        )}
        <div className={TableCellWrapperClass}>
          <Text>
            {text ? text : cellData}
          </Text>
          {metaData && renderMetaData()}
        </div>
      </div>
    )
  };

  return (
    <div className={TableCellClass}>
      {icon && (
        <Icon {...icon} />
      )}
      {dropdown && (
        <Dropdown {...dropdown} />
      )}
      {input && (
        <Input
          {...input}
        />
      )}
      {status && (
        <StatusHints appearance={status}>
          {text ? text : cellData}
        </StatusHints>
      )}
      {!icon && !dropdown && !input && !status && renderCellData()}
    </div>
  );
};

TableCell.displayName = 'TableCell';

export default TableCell;
