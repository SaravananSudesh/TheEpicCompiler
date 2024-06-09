import { useEffect, useState } from 'react';
import './CodeEditor.css'

import { Editor } from '@monaco-editor/react';

function CodeEditor({ darkMode }) {

    const handleEditorDidMount = (monaco) => {
        monaco.editor.defineTheme('light-theme', {
            base: 'vs',
            inherit: true,
            rules: [],
            colors: {},
        })

        monaco.editor.defineTheme('dark-theme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {},
        })
    }

    const options = {
        minimap: {
            enabled: false,
        },
        fontSize: 20
    }

    const [theme, setTheme] = useState('')

    useEffect(() => {
        if (darkMode) setTheme('dark-theme')
        else setTheme('light-theme')
    })

    return (
        <>
            <Editor className="editor" defaultLanguage="python" defaultValue="// some comment" theme={theme} options={options} beforeMount={handleEditorDidMount} />
        </>
    )
}

export default CodeEditor