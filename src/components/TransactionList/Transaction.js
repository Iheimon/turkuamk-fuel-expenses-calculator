import React from 'react';

export const Transaction = ( transaction ) => {
    return (
        <li>
            { transaction.transaction.text }
        </li>
    )
} 