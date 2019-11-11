import React from 'react';


const User = (props) => {


    const {name, surname, pesel, mobilePhone, landlinePhone, email, numberAccount, accountIncome, tradingOnCashMarket,
            tradingOnFuturesMarket, instrumentsPortfolio} = props.user;


        return (
                    <div>
                        <div className="dataPersonFromProps">
                            <p className="nameAndSurname">
                                <span>{name}</span><span> </span><span>{surname}</span>
                            </p>
                            <p className="pesel">{pesel}</p>
                        </div>
                        <div className="dataContactFromProps">
                            <div>
                                <p className="mobilePhone">Telefon komórkowy: <span>{mobilePhone}</span></p>
                                <p className="landlinePhone">Telefon stacjonarny: <span>{landlinePhone}</span></p>
                                <p className="email">Email: <span>{email}</span></p>
                            </div>
                        </div>
                        <div className="dataAccountNumber">
                            <div>
                                <p className="accountNumber">Numer rachunku: <span>{numberAccount}</span></p>
                            </div>
                        </div>
                        <div className="cleanDataUser">
                            <button onClick={() => props.delete()}>Wyczyść dane klienta</button>
                        </div>
                        <div className="incomeSection">
                            <table id="tableFinancialData">
                                <tbody>
                                    <tr>
                                        <td>Dochodowość:</td>
                                        <td>{accountIncome}</td>
                                    </tr>
                                    <tr>
                                        <td>Obrót na rynku kasowym:</td>
                                        <td>{tradingOnCashMarket}</td>
                                    </tr>
                                    <tr>
                                        <td>Obrót na rynku terminowym:</td>
                                        <td>{tradingOnFuturesMarket}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="instrumentsSection">
                            <table id="tableInstrumentsData">
                                <tbody>
                                <tr>
                                    <td>Akcje:</td>
                                    <td>{instrumentsPortfolio.equityInstruments}</td>
                                </tr>
                                <tr>
                                    <td>Obligacje:</td>
                                    <td>{instrumentsPortfolio.debtInstruments}</td>
                                </tr>
                                <tr>
                                    <td>Wolna Gotowka:</td>
                                    <td>{instrumentsPortfolio.freeCash}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
        );

};

export default User;