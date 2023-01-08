import React from 'react';
import { css } from '@emotion/react';

const styles = {
    textColor: css({
        color: 'blue'
    })
}

const Home = () => {
    return (
        <div css={styles.textColor}>Home</div>
    )
}

export default Home;