import React from 'react';
import User from './User';


const UsersList = (props) => {


    if (props.users.length === 1) {
        return (
            <div className="usersList">
                {props.users.map( user =>
                    <User
                        key={user.id}
                        user={user}
                        name={props.name}
                        surname={props.surname}
                        pesel={props.pesel}
                        mobilePhone={props.mobilePhone}
                        landlinePhone={props.landlinePhone}
                        email={props.email}
                        numberAccount={props.numberAccount}
                        delete={props.delete}
                        accountIncome={props.accountIncome}
                        tradingOnCashMarket={props.divisionMarkets}
                        instrumentsPortfolio={props.instrumentsPortfolio}
                    />
                )}
            </div>
        )
    } else {
        return (
            <div>
                <div className="dataPerson">
                        <p className="headerOwner">Właściciel</p>
                        <p className="nameAndSurname">
                        </p>
                        <p className="pesel">
                        </p>
                </div>
                <div className="dataContact">
                        <p className="headerContactData">Dane kontaktowe</p>
                        <p className="mobilePhone">Telefon komórkowy:</p>
                        <p className="landlinePhone">Telefon stacjonarny:</p>
                        <p className="email">Email:</p>
                </div>
                <div className="dataAccountNumber">
                        <p className="headerAccountingNumbers">Numery rachunków</p>
                </div>
                <div className="cleanDataUser">
                </div>
                <div className="incomeSection">
                    <table id="tableFinancialData">
                        <tbody>
                        <tr>
                            <td>Dochodowość:</td>
                        </tr>
                        <tr>
                            <td>Obrót na rynku kasowym:</td>
                        </tr>
                        <tr>
                            <td>Obrót na rynku terminowym:</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="instrumentsSection">
                    <table id="tableInstrumentsData">
                        <tbody>
                        <tr>
                            <td>Akcje:</td>
                        </tr>
                        <tr>
                            <td>Obligacje:</td>
                        </tr>
                        <tr>
                            <td>Wolna Gotowka:</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
};

export default UsersList;