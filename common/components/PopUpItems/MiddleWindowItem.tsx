import clsx from 'clsx';
import React from 'react';

interface MiddleWindowItemProps {
    category: string
    number: string
}

const MiddleWindowItem = ({category, number}: MiddleWindowItemProps) => {

let innerStyles = "h-[18px] w-1/2 flex items-center"

    return (
        <div className="h-[36px] flex items-center">
                  <div className={clsx("text-font-100", innerStyles)}>
                    <span>{category}</span>
                  </div>
                  <div className={clsx("text-font-150 text-right justify-end", innerStyles)}>
                    <span>{number}</span>
                  </div>
                </div>
    );
};

export default MiddleWindowItem;