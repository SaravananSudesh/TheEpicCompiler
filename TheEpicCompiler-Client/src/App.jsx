import './App.css'

import { useState } from 'react'

import MainNav from './components/mainNav/MainNav.jsx'
import CodeEditor from './components/codeEditor/CodeEditor.jsx'
import CodeOutput from './components/codeOutput/CodeOutput.jsx'
import MainFooter from './components/mainFooter/MainFooter.jsx'

import ClassNames from './core/ClassNames'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [outputVisible, setOutputVisible] = useState(false)

  return (
    <>
      <div className="min-h-full">
        <MainNav applyDarkMode={setDarkMode} />
        <main>
          <div className="w-full bg-light-2 dark:bg-dark-2 transition-colors">
            <CodeEditor darkMode={darkMode} />
            <CodeOutput outputVisible={outputVisible} applyOutputVisible={setOutputVisible} />
          </div>
        </main>
        <MainFooter applyOutputVisible={setOutputVisible}/>
      </div>
    </>
  )
}

export default App
