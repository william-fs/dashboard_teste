import { ReactNode } from 'react';
import './Tabela.css';

interface table {
    titleTable: string | ReactNode;
    contentTable: string | ReactNode;
    totalTable: string | number | ReactNode;
}

function Tabela({titleTable, contentTable, totalTable}:table) {
    return(
        <div className="tableStyle">
            <table className="table table-bordered myTable">
                <thead>
                    {titleTable}
                </thead>
                <tbody>
                    {contentTable}
                    {totalTable} 
                </tbody>
            </table>
        </div>
    )
}
export default Tabela;