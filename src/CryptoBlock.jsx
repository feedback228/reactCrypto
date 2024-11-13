import React from 'react';

const CryptoBlock = ({ crypto, isPinned, togglePinCrypto }) => {
    return (
        <li
            key={crypto.id}
            className={`border dark:border-black border-white rounded-md p-4 shadow-sm backdrop-blur-lg 
                ${isPinned ? 'bg-yellow-100 dark:bg-yellow-900' : 'bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30'} 
                flex items-center space-x-4`}
        >
            {crypto.image ? (
                <img
                    src={crypto.image}
                    alt={crypto.name}
                    className="w-12 h-12"
                />
            ) : (
                <div className="w-12 h-12 bg-gray-300 flex items-center justify-center text-gray-300">
                    Иконки нет
                </div>
            )}
            <div>
                <h2 className="text-lg font-semibold dark:text-white text-black">
                    {crypto.name} - {crypto.symbol.toUpperCase()}
                </h2>
                <p className="text-sm dark:text-gray-300 text-black">
                    Текущая цена: <span>${crypto.current_price}</span>
                </p>
                <p
                    className={`text-sm font-medium ${
                        crypto.price_change_percentage_24h > 0
                            ? 'text-green-600'
                            : 'text-red-600'
                    }`}
                >
                    Изменение за 24 часа:{' '}
                    {crypto.price_change_percentage_24h?.toFixed(2)}%
                </p>
                <p className="text-sm dark:text-gray-300 text-black">
                    Рыночная капитализация: $
                    {crypto.market_cap.toLocaleString()}
                </p>
            </div>
            <button
                className={`ml-auto px-3 py-1 rounded-md text-sm 
                    ${isPinned ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}
                    hover:opacity-80 transition`}
                onClick={() => togglePinCrypto(crypto)}
            >
                {isPinned ? 'Открепить' : 'Закрепить'}
            </button>
        </li>
    );
};

export default CryptoBlock;
