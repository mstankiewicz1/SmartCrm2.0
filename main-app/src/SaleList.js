import React from 'react';
import SingleSale from './SingleSale';

const SaleList = (props) => {




    const active = props.listSale.filter(singleSale => singleSale.active);
    const done = props.listSale.filter(singleSale => !singleSale.active);

    const saleActive = active.map(singleSale =>
        <SingleSale
            key={singleSale.id}
            singleSale={singleSale}
            change={props.change}
        />
    );

    const saleDone = done.map(singleSale =>
        <SingleSale
            key={singleSale.id}
            singleSale={singleSale}
            change={props.change}
        />
    );

    return (
        <div className="saleList">
            <div className="active">
                <h4>Kontakty w toku<em>({active.length})</em></h4>
                {saleActive.length > 0  ? saleActive : <p className="communicateNoSales">Brak sprzedazy</p>}
            </div>


            <div className="done">
                <h4>Sprzedaz zakonczona <em>({done.length})</em></h4>
                {saleDone}
            </div>
        </div>
    )
};

export default SaleList;