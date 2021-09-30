import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { getDate } from '../../utils/Date';

import { SalePageContainer } from './styles';

interface SaleProps {
    entryUpdate: number;
    updateFunc: (status: number) => void;
}

interface Product {
    product_name: string;
}

export function Sale(props: SaleProps) {

    const history = useHistory();

    const [ products, setProducts ] = useState<Product[]>([]);
    const [ dataList, setDatalist ] = useState<Product[]>([]);
    const [ productName, setProductName ] = useState('');
    const [ paymentType, setPaymentType ] = useState('Dinheiro');
    const [ quantity, setQuantity ] = useState(0);
    const [ amount, setAmount ] = useState(0);

    useEffect(() => {
        api.get('/entry/datalist')
            .then(response => {
                setDatalist(response.data)
                console.log(response.data)
            });
    }, [])

    const data = {
        productName,
        paymentType,
        createdAt: `${getDate('/')}`,
        quantity,
        amount
    };

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        api.post('/entry', data);
        props.updateFunc(props.entryUpdate + 1);
        let newProducts = [...products];
        setProducts(newProducts);
        history.push("/");
        
    }

    return (
        <SalePageContainer>
            <h1>Lançar venda</h1>

            <form onSubmit={event => handleSubmit(event)}>

                <datalist id="products">
                    {dataList.map((item, index) => (
                        <option key={index} value={item.product_name} />
                    ))}
                </datalist>

                <input
                    required
                    type="search"
                    list="products"
                    placeholder="Nome do produto..."
                    onChange={event => setProductName(event.target.value)}
                />

                <select onChange={event => setPaymentType(event.target.value)}>
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Débito">Débito</option>
                    <option value="Crédito">Crédito</option>
                    <option value="Pix">Pix</option>
                </select>

                <input
                    required
                    min="1"
                    type="number"
                    placeholder="Quantidade..."
                    onChange={event => setQuantity(Number(event.target.value))}
                />
                <input
                    min="0.01"
                    required
                    type="number"
                    step="0.01"
                    placeholder="Valor em R$..."
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <div className="button-group">
                    <Button buttonClass="solid" buttonText="Adicionar" />
                    <Button buttonClass="outline" buttonText="Cancelar" />
                </div>
            </form>

        </SalePageContainer>
    )
}