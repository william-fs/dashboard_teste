import { ReactNode } from 'react';
import './Table.css';

interface table {
    titleTable: string | ReactNode;
    contentTable: string | ReactNode;
    totalTable: string | number | ReactNode;
}

function Table({titleTable, contentTable, totalTable}:table) {
    return(
        <table className="table table-bordered myTable">
            <thead>
                {titleTable}
            </thead>

            <tbody>
                {contentTable}
                {totalTable} 
            </tbody>
        </table>
    )
}
export default Table;