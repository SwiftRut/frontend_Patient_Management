// ExampleComponent.js
import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

function ExampleComponent() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    return (
        <div>
            {loading ? (
                <div className="loading-container">
                    <TailSpin height="80" width="80" color="blue" ariaLabel="loading" />
                </div>
            ) : (
                <div>Your Content Here</div>
            )}
        </div>
    );
}

export default ExampleComponent;
