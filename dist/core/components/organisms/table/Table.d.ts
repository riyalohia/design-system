/// <reference types="react" />
import { Data, Schema, GridProps, fetchDataFn } from '../grid';
interface SyncProps {
    data: Data;
    schema: Schema;
}
interface AsyncProps {
    fetchData: fetchDataFn;
}
interface SharedTableProps {
    type?: GridProps['type'];
    size?: GridProps['size'];
    draggable?: boolean;
    withHeader?: boolean;
    withCheckbox?: GridProps['withCheckbox'];
    showMenu?: GridProps['showMenu'];
    withPagination?: GridProps['withPagination'];
    paginationType?: GridProps['paginationType'];
    pageSize?: GridProps['pageSize'];
    loaderSchema?: GridProps['loaderSchema'];
}
declare type SyncTableProps = SyncProps & SharedTableProps;
declare type AsyncTableProps = AsyncProps & SharedTableProps;
export declare type TableProps = (AsyncTableProps | SyncTableProps);
export declare const Table: (props: TableProps) => JSX.Element;
export default Table;
