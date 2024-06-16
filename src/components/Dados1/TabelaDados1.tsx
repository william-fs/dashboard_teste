import { useEffect, useState } from 'react';
import './TabelaDados1.css';

// Soma totais dos preços, quantidades e o tipo do detalhamento
import {somarPrecoFabX, somarPrecoFabY, somarPrecoFabZ} from "./TotalSelect";
import {somarQuantidadeFabX, somarQuantidadeFabY, somarQuantidadeFabZ} from "./TotalSelect";
import Table from '../Table/Table';

interface TabelaDados1Props {
    contentSelecionado0: string;
    contentSelecionado1: string;
    contentSelecionado2: string;
}

function TabelaDados1({ contentSelecionado0, contentSelecionado1, contentSelecionado2 }):React.FC<TabelaDados1Props> | React.ReactElement {

    const [precoFabSel, setPrecoFabSel] = useState(false);

    useEffect(() => {
        console.log("Soma do X = " + somarPrecoFabX);
        console.log("Quantidade X = " + somarQuantidadeFabX);
        console.log("Soma do Y = " + somarPrecoFabY);
        console.log("Quantidade Y = " + somarQuantidadeFabY);
        console.log("Soma do Z = " + somarPrecoFabZ);
        console.log("Quantidade Z = " + somarQuantidadeFabZ);
        console.log("CCCCCC" + contentSelecionado0);
    },[])

    useState(() => {
        if(contentSelecionado0 === "Preço" && contentSelecionado1 === "Fabricante") {
            setPrecoFabSel(true);
        }
    },[contentSelecionado0, contentSelecionado1])
    

    return(
        <>
            {precoFabSel && (
                <Table
                titleTable={
                    <tr>
                        <td>{contentSelecionado1}</td>
                        <td>{contentSelecionado0}</td>
                    </tr>
                }
                contentTable={
                    <>
                        <tr>
                            <td>Frabricante X</td>
                            <td>R$ 00</td>
                        </tr>
                        <tr>
                            <td>Frabricante Y</td>
                            <td>R$ 00</td>
                        </tr>
                        <tr>
                            <td>Frabricante Z</td>
                            <td>R$ 00</td>
                        </tr>
                    </>
                }
                totalTable={
                    <>
                        <tr>
                            <td>{contentSelecionado2}</td>
                            <td>{contentSelecionado2}</td>
                        </tr>
                        
                    </>
                }
            />
        )}
            
        </>
    )
}

export default TabelaDados1;