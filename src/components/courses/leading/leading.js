import React from 'react';

function Leading({ setStarted }) {
    return <div>
        <button onClick={setStarted()}>unstart</button>
    </div>;
}

export default Leading;
