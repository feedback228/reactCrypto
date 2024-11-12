import React, { useState, useEffect } from 'react';
import BtnRefreshCryptoList from './BtnRefreshCryptoList';
import CryptoList from './CryptoList';
import axios from 'axios';
import BtnTheme from './BtnTheme';

const App = () => {
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCryptos = () => {
        setLoading(true);
        setError(null);

        axios
            .get('https://api.coingecko.com/api/v3/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 100,
                    page: 1,
                    sparkline: false,
                },
            })
            .then((response) => {
                setCryptos(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Ошибка загрузки данных');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchCryptos();
    }, []);

    return (
        <div className="flex justify-center items-center flex-col max-w-[1700px]  gap-5">
            <div className='flex gap-4'>
                <BtnRefreshCryptoList fetchCryptos={fetchCryptos} />
                <BtnTheme />
            </div>
            <CryptoList cryptos={cryptos} loading={loading} error={error} />
        </div>
    );
};

export default App;
