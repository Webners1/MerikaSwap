import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { classNames } from 'app/functions/styling'
// @ts-ignore TYPE NEEDS FIXING
import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

import Typography from '../Typography'

const LANG_TO_COUNTRY: Record<string, string> = {

}

export default function LangSwitcher() {
  const { locale, locales, asPath, push } = useRouter()

  return (
   <>
   </>
  )
}
