
/** @jsxRuntime classic */
/** @jsx jsx */
import React, {  } from 'react'
import { css, jsx } from '@emotion/react';

import { ButtonType } from '../../types'

const styles = {
    buttonBase: css({
        padding: '8px 16px',
        backgroundColor: 'transparent',
        border: '1px solid #000',
        borderRadius: '4px',
        marginRight: '8px',
    }),
}

export interface ButtonProps {
    children?: React.ReactNode
    disabled: boolean
    type?: ButtonType
    onClick: () => void
};

const Button: React.FC<ButtonProps> = ({ 
    children,
    disabled, 
    type = ButtonType.Button,  
    onClick, 
}) => {
    return (
        <button
            css={styles.buttonBase}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
