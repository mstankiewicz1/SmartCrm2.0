import React from 'react';


const User = (props) => {


    const {name, surname, pesel, mobilePhone, landlinePhone, email, numberAccount, accountIncome, divisionMarkets,
        instrumentsPortfolio} = props.user;


        return (
                    <div>
                        <div className="dataPersonFromProps">
                            <p className="nameAndSurname">
                                <span>{name ? name : null}</span><span> </span><span>{surname ? surname : null}</span>
                            </p>
                            <p className="pesel">{pesel ? pesel : null}</p>
                        </div>
                        <div className="dataContactFromProps">
                            <div>
                                <p className="mobilePhone">Telefon komórkowy: <span>{mobilePhone ? mobilePhone : null}</span></p>
                                <p className="landlinePhone">Telefon stacjonarny: <span>{landlinePhone ? landlinePhone : null}</span></p>
                                <p className="email">Email: <span>{email ? email : null}</span></p>
                            </div>
                        </div>
                        <div className="dataAccountNumber">
                            <div>
                                <p className="accountNumber">Numer rachunku: <span>{numberAccount ? numberAccount : null}</span></p>
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
                                        <td>{accountIncome ? accountIncome : null}</td>
                                    </tr>
                                    <tr>
                                        <td>Obrót na rynku kasowym:</td>
                                        <td>{divisionMarkets.tradingOnCashMarket ? divisionMarkets.tradingOnCashMarket : null }</td>
                                    </tr>
                                    <tr>
                                        <td>Obrót na rynku terminowym:</td>
                                        <td>{divisionMarkets.tradingOnFuturesMarket ? divisionMarkets.tradingOnFuturesMarket : null}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="instrumentsSection">
                            <table id="tableInstrumentsData">
                                <tbody>
                                <tr>
                                    <td>Akcje:</td>
                                    <td>{instrumentsPortfolio.equityInstruments ? instrumentsPortfolio.equityInstruments : null}</td>
                                </tr>
                                <tr>
                                    <td>Obligacje:</td>
                                    <td>{instrumentsPortfolio.debtInstruments ? instrumentsPortfolio.debtInstruments : null}</td>
                                </tr>
                                <tr>
                                    <td>Wolna Gotowka:</td>
                                    <td>{instrumentsPortfolio.freeCash ? instrumentsPortfolio.freeCash : null}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
        );

};

export default User;