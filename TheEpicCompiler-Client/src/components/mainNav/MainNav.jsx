import './MainNav.css'

import { useState, useEffect } from 'react'
import { Disclosure, Transition, Listbox, ListboxButton, ListboxOption, ListboxOptions, Switch } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";


import ClassNames from '../../core/ClassNames'

const languages = [
    { id: 0, name: 'Python', icon: 'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z' },
    { id: 1, name: 'Java', icon: '' },
    { id: 2, name: 'C', icon: '' }
]

function MainNav({ applyDarkMode, applyLanguage }) {

    const [selected, setSelected] = useState(languages[0])

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        let savedMode = localStorage.getItem('DISPLAYMODE')

        if (!savedMode) {
            savedMode = 'light'
            setDarkMode(false)
            localStorage.setItem('DISPLAYMODE', savedMode)
        }

        if (savedMode === 'dark') {
            document.body.classList.add('dark')
            setDarkMode(true)
            applyDarkMode(true)
        }
        else {
            document.body.classList.remove('dark')
            setDarkMode(false)
            applyDarkMode(false)
        }

    }, [])

    const changeDarkMode = () => {
        setDarkMode(!darkMode)
        applyDarkMode(!darkMode)
        if (!darkMode === true) {
            document.body.classList.add('dark')
            localStorage.setItem('DISPLAYMODE', 'dark')
        }
        else {
            document.body.classList.remove('dark')
            localStorage.setItem('DISPLAYMODE', 'light')
        }
    }

    return (
        <div>
            <Disclosure as="nav" className="nav">
                <>
                    <div className="mx-auto px-4">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                        className={ClassNames(
                                            darkMode ? 'fill-dark-c-1' : 'fill-light-c-1',
                                            'block h-8 w-auto'
                                        )}
                                    >
                                        <title>The Epic Compiler</title>
                                        <path d="M.004 12.004A12.012 12.012 0 0 0 12 24a2.27 2.27 0 0 0 2.266-2.266A2.27 2.27 0 0 0 12 19.467c-4.116 0-7.463-3.347-7.463-7.463S7.884 4.541 12 4.541c3.323 0 6.15 2.186 7.111 5.197H12a2.27 2.27 0 0 0-2.266 2.266A2.27 2.27 0 0 0 12 14.27h9.73a2.27 2.27 0 0 0 2.266-2.266A12.02 12.02 0 0 0 12 0C5.385.008.004 5.39.004 12.004" />
                                    </svg>
                                </div>

                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Listbox value={selected} onChange={setSelected}>
                                        {({ open }) => (
                                            <>
                                                <div className="relative">
                                                    <ListboxButton className="language-list-button">
                                                        <span className="flex items-center">
                                                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                                className={ClassNames(
                                                                    darkMode ? 'fill-dark-1' : 'fill-light-1',
                                                                    'h-5 w-5 flex-shrink-0 rounded-full'
                                                                )}
                                                            >
                                                                <path d={selected.icon} />
                                                            </svg>
                                                            <span className="ml-3 block truncate">{selected.name}</span>
                                                        </span>
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        </span>
                                                    </ListboxButton>

                                                    <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                        <ListboxOptions className="language-list-options">
                                                            {languages.map((language) => (
                                                                <ListboxOption
                                                                    key={language.id}
                                                                    className={({ focus }) =>
                                                                        ClassNames(
                                                                            focus ? 'bg-dark-1 text-dark-c-1' : '',
                                                                            !focus ? 'text-light-c-1 dark:text-dark-c-1' : '',
                                                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                        )
                                                                    }
                                                                    value={language}
                                                                >
                                                                    {({ selected, focus }) => (
                                                                        <>
                                                                            <div className="flex items-center">
                                                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                                                    className={ClassNames(
                                                                                        focus ? 'fill-dark-c-1' : 'fill-light-c-1 dark:fill-dark-c-1',
                                                                                        'h-5 w-5 flex-shrink-0 rounded-full'
                                                                                    )}
                                                                                >
                                                                                    <path d={language.icon} />
                                                                                </svg>
                                                                                <span
                                                                                    className={ClassNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                                >
                                                                                    {language.name}
                                                                                </span>
                                                                            </div>

                                                                            {selected ? (
                                                                                <span
                                                                                    className={ClassNames(
                                                                                        focus ? 'text-dark-c-1' : 'text-dark-c-2',
                                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                    )}
                                                                                >
                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </ListboxOption>
                                                            ))}
                                                        </ListboxOptions>
                                                    </Transition>
                                                </div>
                                            </>
                                        )}
                                    </Listbox>
                                </div>
                                <div className="flex-shrink-0 px-3 py-2">
                                    <Switch
                                        checked={darkMode}
                                        onChange={changeDarkMode}
                                        className={ClassNames(
                                            darkMode ? 'bg-dark-c-1' : 'bg-light-c-1',
                                            'dark-switch'
                                        )}
                                    >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                            className={ClassNames(
                                                darkMode ? 'translate-x-5' : 'translate-x-0',
                                                'knob'
                                            )}
                                        >
                                            <span
                                                className={ClassNames(
                                                    darkMode ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                                                    'icon'
                                                )}
                                                aria-hidden="true"
                                            >
                                                <SunIcon className="h-3 w-3 text-gray-400" />
                                            </span>
                                            <span
                                                className={ClassNames(
                                                    darkMode ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                                                    'icon'
                                                )}
                                                aria-hidden="true"
                                            >
                                                <MoonIcon className="h-3 w-3 text-dark-c-1" />
                                            </span>
                                        </span>

                                    </Switch>
                                </div>


                            </div>

                        </div>
                    </div>
                </>
            </Disclosure>

        </div>
    )
}

export default MainNav