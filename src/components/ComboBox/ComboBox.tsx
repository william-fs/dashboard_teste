import { useState } from 'react';
import "./ComboBox.css";

// Importação componente dos dados 
import Dados1 from '../Dados1/Dados1';
import Dados2 from '../Dados2/Dados2';
import Dados3 from '../Dados3/Dados3';
import Dados4 from '../Dados4/Dados4';
import Dados5 from '../Dados5/Dados5';

function ComboBox() {

    // Estados escolha 
    const [selecao, setSelecao] = useState("");
    const [escolhaDados1, setEscolhaDados1] = useState(false);
    const [escolhaDados2, setEscolhaDados2] = useState(false);
    const [escolhaDados3, setEscolhaDados3] = useState(false);
    const [escolhaDados4, setEscolhaDados4] = useState(false);
    const [escolhaDados5, setEscolhaDados5] = useState(false);

    // Função de verificação 
    function escolhaDados(dado: string) {
        setSelecao(dado);

        if(dado === "nulo") {
            setEscolhaDados1(false); setEscolhaDados2(false); setEscolhaDados3(false); setEscolhaDados4(false); setEscolhaDados5(false);
        }
        if(dado === "dados1") {
            setEscolhaDados1(true); setEscolhaDados2(false); setEscolhaDados3(false); setEscolhaDados4(false); setEscolhaDados5(false);
        }
        if(dado === "dados2") {
            setEscolhaDados1(false); setEscolhaDados2(true); setEscolhaDados3(false); setEscolhaDados4(false); setEscolhaDados5(false);
        }
        if(dado === "dados3") {
            setEscolhaDados1(false); setEscolhaDados2(false); setEscolhaDados3(true); setEscolhaDados4(false); setEscolhaDados5(false);
        }
        if(dado === "dados4") {
            setEscolhaDados1(false); setEscolhaDados2(false); setEscolhaDados3(false); setEscolhaDados4(true); setEscolhaDados5(false);
        }
        if(dado === "dados5") {
            setEscolhaDados1(false); setEscolhaDados2(false); setEscolhaDados3(false); setEscolhaDados4(false); setEscolhaDados5(true);
        }
    }

    return(
        <div className="comboBox">
            <div>
                <label className='comboBoxLabel' htmlFor="comboBox">Selecione a fonte de dados</label>
                <select id='comboBox' value={selecao} onChange={((e) => escolhaDados(e.target.value))} className={"form-select"}>
                    <option value="nulo">-</option>
                    <option value="dados1">Fonte de Dados 1</option>
                    <option value="dados2">Fonte de Dados 2</option>
                    <option value="dados3">Fonte de Dados 3</option>
                    <option value="dados4">Fonte de Dados 4</option>
                    <option value="dados5">Fonte de Dados 5</option>
                </select>
            </div>

            <div>
                {escolhaDados1 && (<Dados1 />)}
                {escolhaDados2 && (<Dados2 />)}
                {escolhaDados3 && (<Dados3 />)}
                {escolhaDados4 && (<Dados4 />)}
                {escolhaDados5 && (<Dados5 />)}
            </div>
        </div>
    )
}
export default ComboBox;