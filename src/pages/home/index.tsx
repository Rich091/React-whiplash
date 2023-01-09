import React, { useState } from 'react';
import { css } from '@emotion/react';

const styles = {

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
            <div>You have clicked {count} times!!</div>
        </div>
    )
}

export default Home;