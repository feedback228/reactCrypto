import React from 'react';

const BtnRefreshCryptoList = (props) => {
    return (
        <button
              className="backdrop-blur-lg dark:bg-opacity-30 bg-opacity-30 p-2 rounded-md dark:bg-black bg-white dark:text-white text-black transition ease-in-out duration-300 
                  dark:hover:bg-opacity-60 hover:bg-opacity-60"
            onClick={props.fetchCryptos}
        >
            Обновить список
        </button>
    );
};

export default BtnRefreshCryptoList;
