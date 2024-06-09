import './CodeOutput.css'

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition, Textarea } from '@headlessui/react'
import { XMarkIcon  } from "@heroicons/react/24/outline";

export default function CodeOutput({ outputVisible, applyOutputVisible }) {

  useEffect(() => {
    console.log(outputVisible)
  })

  return (
    <Transition.Root show={outputVisible} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={applyOutputVisible}>
        <div className="absolute inset-0 overflow-hidden backdrop-blur-sm">

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-2xl">
                <div className="flex h-full flex-col overflow-y-none bg-light-1 dark:bg-dark-2 py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-light-c-1 dark:text-dark-c-1"> Output </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md text-light-c-1 dark:text-dark-c-1 hover:font-bold focus:outline-none"
                          onClick={() => applyOutputVisible(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="h-full" aria-hidden="true">
                        <Textarea className="output-area"></Textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
