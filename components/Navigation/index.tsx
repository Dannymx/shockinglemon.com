"use client";

/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const navigation = [
  { name: "Music", href: "/music", current: false },
  { name: "Band", href: "/band", current: false },
  { name: "Media", href: "/media", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () => (
  <Disclosure
    as="nav"
    className={`
      mx-auto w-full bg-gray-800
      sm:container sm:bg-transparent
    `}
  >
    {({ open }) => (
      <React.Fragment>
        <div
          className={`
            mx-auto px-2
            sm:px-6
            lg:px-8
          `}
        >
          <div
            className={`
              relative flex h-16 items-center justify-between
              sm:h-auto
            `}
          >
            <div
              className={`
                absolute inset-y-0 left-0 flex items-center
                sm:hidden
              `}
            >
              {/* Mobile menu button */}
              <Disclosure.Button
                className={`
                  inline-flex items-center justify-center rounded-md p-2
                  text-gray-400
                  hover:bg-gray-700 hover:text-white
                  focus:ring-2 focus:ring-white focus:outline-none
                  focus:ring-inset
                `}
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon aria-hidden="true" className="block size-6" />
                ) : (
                  <Bars3Icon aria-hidden="true" className="block size-6" />
                )}
              </Disclosure.Button>
            </div>
            <div
              className={`
                flex flex-1 items-center justify-center
                sm:flex-col sm:items-stretch sm:justify-between
              `}
            >
              <div className="flex items-center justify-center">
                <span
                  className={`
                    font-bauhaus text-2xl font-bold text-light-copy
                    sm:text-6xl sm:font-normal sm:text-dark-copy
                  `}
                >
                  <Link href="/">Shocking Lemon</Link>
                </span>
              </div>
              <div
                className={`
                  mt-4 hidden
                  sm:block
                `}
              >
                <div
                  className={`
                    flex justify-center space-x-4 align-middle font-bebas
                    text-2xl
                  `}
                >
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      aria-current={item.current ? "page" : undefined}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "underline underline-offset-2"
                          : "hover:bg-gray-700 hover:text-white",
                        "px-3 py-1 rounded-md",
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                aria-current={item.current ? "page" : undefined}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md font-bebas text-2xl",
                )}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </React.Fragment>
    )}
  </Disclosure>
);
export default Navigation;
