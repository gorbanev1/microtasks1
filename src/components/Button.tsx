import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = ({name, callBack}) => {
/*    const onClickHandler = () => {
        callBack()
    }*/
    return (
        <button onClick={callBack}>
            {name}
        </button>
    );
};

