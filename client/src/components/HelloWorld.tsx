import React from 'react'
import { useEffect, useState } from 'react';

export default function HelloWorld() {

    const [response, setResponse] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
          setResponse(await fetch(`http://localhost:8080/helloworld/`)
            .then(res => res.text()))
            })();
        }, []
    );

    return (
        <h1>{response}</h1>
    )
}
