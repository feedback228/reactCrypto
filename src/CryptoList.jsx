import React, { useState, useEffect } from 'react';
import CryptoBlock from './CryptoBlock';

const CryptoList = (props) => {
    const [displayedCryptos, setDisplayedCryptos] = useState([]);
    const [pinnedCryptos, setPinnedCryptos] = useState([]); 

    useEffect(() => {
        const savedPinnedCryptos = JSON.parse(localStorage.getItem('pinnedCryptos')) || [];
        setPinnedCryptos(savedPinnedCryptos);
    }, []);

    useEffect(() => {
        if (pinnedCryptos.length > 0) {
            localStorage.setItem('pinnedCryptos', JSON.stringify(pinnedCryptos));
        }
    }, [pinnedCryptos]);

    useEffect(() => {
        if (props.cryptos.length > 0) {
            setRandomCryptos(props.cryptos);
        }
    }, [props.cryptos]);

    const setRandomCryptos = (cryptoList) => {
        const randomCryptos = [];
        const alreadyUsedIndexes = new Set();

        while (randomCryptos.length < 3) {
            const randomIndex = Math.floor(Math.random() * cryptoList.length);
            if (
                !alreadyUsedIndexes.has(randomIndex) &&
                !pinnedCryptos.some((crypto) => crypto.id === cryptoList[randomIndex].id)
            ) {
                randomCryptos.push(cryptoList[randomIndex]);
                alreadyUsedIndexes.add(randomIndex);
            }
        }

        setDisplayedCryptos([...pinnedCryptos, ...randomCryptos]);
    };

    const togglePinCrypto = (crypto) => {
        const isPinned = pinnedCryptos.some((pinned) => pinned.id === crypto.id);

        if (isPinned) {
            setPinnedCryptos((prev) => prev.filter((pinned) => pinned.id !== crypto.id));
        } else {
            setPinnedCryptos((prev) => [...prev, crypto]);
        }
    };

    if (props.loading) return <p>Загрузка...</p>;
    if (props.error) return <p>{props.error}</p>;

    return (
        <ul className="space-y-4">
            {displayedCryptos.map((crypto) => (
                <CryptoBlock
                    key={crypto.id}
                    crypto={crypto}
                    isPinned={pinnedCryptos.some((pinned) => pinned.id === crypto.id)}
                    togglePinCrypto={togglePinCrypto}
                />
            ))}
        </ul>
    );
};

export default CryptoList;
