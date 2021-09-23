import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';
import { api } from '../../services/api';

import { SalePageContainer } from './style';

// interface ProductProps {
//     entryUpdate: number;
//     updateFunc: (status: number) => void;
// }

export function Product() {

    const history = useHistory();

    const [ productName, setProductName ] = useState('');
    const [ code, setCode ] = useState(0);

    const data = {
        productName,
        code
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        api.post('/entry', data);
        // props.updateFunc(props.entryUpdate + 1);
        history.push("/");
    }

    return (
        <SalePageContainer>
            <h1>Cadastrar produtos</h1>

            <form onSubmit={event => handleSubmit(event)}>
                <input
                    required
                    type="text"
                    placeholder="Nome do produto..."
                    onChange={event => setProductName(event.target.value)}
                />

                <input
                    required
                    min="1"
                    type="number"
                    placeholder="Código do produto..."
                    onChange={event => setCode(Number(event.target.value))}
                />

                <div className="button-group">
                    <Button buttonClass="solid" buttonText="Adicionar" />
                    <Button buttonClass="outline" buttonText="Cancelar" />
                </div>
            </form>

        </SalePageContainer>
    )
}