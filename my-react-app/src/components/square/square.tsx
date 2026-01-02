import React from 'react';
import './square.css';

type SquareProps = {
    value?: string;
    onClick?: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
    // const [value, setValue] = React.useState<string | null>('');

   

    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
};

export default Square;