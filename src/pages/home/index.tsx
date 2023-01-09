/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import Button from '../../components/button/Button';

const styles = {
    h2Styles: css({
        fontSize: '18px',
        fontWeight: 500,
        marginBottom: '16px'
    })
}

const Home = () => {
    const [count, setCount] = useState(0);

    // Primary Button Method
    const increment = () => {
        setCount(count + 1);
    }

    // Secondary Button Method
    const decrement = () => {
        setCount(count - 1);
    }

    // Default Button Method
    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter</h1>
            <div css={styles.h2Styles}>You have clicked {count} times!!</div>
            <Button disabled={false} onClick={increment}>+</Button>
            <Button disabled={false} onClick={decrement}>-</Button>
            <Button disabled={false} onClick={reset}>Reset</Button>
        </div>
    )
}

export default Home;