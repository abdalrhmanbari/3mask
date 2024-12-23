'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'




export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="  m-auto  border-b  top-0     pe-[3rem]  bg-bgGrey z-[2]">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={"/"}  className='-m-1.5 p-1.5 uppercase text-3xl font-bold '><span className=' text-primary'>3m</span>ask</Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
          </Popover>
          <Link href="/catalog" className="text-sm/6 font-semibold text-gray-900 uppercase">
            Catalog
          </Link>
          <Link href="/delivery" className="text-sm/6 font-semibold text-gray-900 uppercase">
          Delivery
          </Link>
          <Link href="/wholesale" className="text-sm/6 font-semibold text-gray-900 uppercase">
          WHOLESALE
          </Link>
          <Link href="/protection" className="text-sm/6 font-semibold text-gray-900 uppercase">
          What does it protect?
          </Link>
          <Link href="/contact" className="text-sm/6 font-semibold text-gray-900 uppercase">
                Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <Link href="login" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">

                <Link 
                                onClick={() => setMobileMenuOpen(false)}

                href={"/"}  className='-m-1.5 p-1.5 uppercase text-3xl font-bold '><span className=' text-primary'>3m</span>ask</Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="/catalog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Catalog
                </Link>
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="/delivery"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                 Delivery
                </Link>
                <Link
                                onClick={() => setMobileMenuOpen(false)}

                  href="/wholesale"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  WHOLESALE
                </Link>
                <Link
                                onClick={() => setMobileMenuOpen(false)}

                  href="/protection"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                What does it protect?
                </Link>
                <Link
                                onClick={() => setMobileMenuOpen(false)}

                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                                onClick={() => setMobileMenuOpen(false)}

                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}