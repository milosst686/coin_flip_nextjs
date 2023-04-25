import clsx from 'clsx';
import React from 'react';

interface CurrencyButtonProps {
    text: string, 
    className?: string
}

const CurrencyButton = ({text, className}: CurrencyButtonProps ) => {
    return (
        <button className={clsx("py-[7px] px-[12px] h-[26px] flex items-center", className)}>{text}</button>
    );
};

export default CurrencyButton;