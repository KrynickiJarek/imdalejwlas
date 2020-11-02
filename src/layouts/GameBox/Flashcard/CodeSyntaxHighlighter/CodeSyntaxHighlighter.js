import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const CodeSyntaxHigh = () => {
    const codeString = '(num) => num + 1';
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
            {"<div>test</div>"}
        </SyntaxHighlighter>
    );
};

export default CodeSyntaxHigh;