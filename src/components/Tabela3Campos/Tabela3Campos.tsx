import { ReactNode } from 'react';
import './Tabela3Campos.css';

interface table {
    titleTable: string | ReactNode;
    contentTable: string | ReactNode;
    totalTable: string | number | ReactNode;
}

function Tabela3Campos({titleTable, contentTable, totalTable}:table) {
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
export default Tabela3Campos;