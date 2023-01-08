import React, { useState } from 'react';
import { css } from '@emotion/react';

import Button from '../../components/button/button'

const styles = {

}

const Home = () => {
    const [count, setCount] = useState(0);

    // Primary Button Method
    const increment = () => {
        setcount(count + 1);
    }

    // Secondary Button Method
    const decrement = () => {
        setcount(count - 1);
    }

    // Default Button Method
    const reset = () => {
        setcount(0);
    }

    return (
        <div>
            <h1>Counter</h1>
            <div>You have clicked {count} times!!</div>
            <Button>Hello</Button>
        </div>
    )
}

export default Home;