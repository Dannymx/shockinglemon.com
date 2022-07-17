/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Music", href: "music", current: false },
  { name: "Band", href: "band", current: false },
  { name: "Media", href: "media", current: false },
  { name: "Blog", href: "blog", current: false },
  { name: "About", href: "about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => (
  <Disclosure
    as="nav"
    className="bg-gray-800 sm:mx-auto sm:max-w-max sm:bg-transparent"
  >
    {({ open }) => (
      <>
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between sm:h-auto">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:flex-col sm:items-stretch sm:justify-between">
              <div className="flex items-center justify-center">
                <span className="font-bauhaus text-2xl font-bold text-light-copy sm:text-6xl sm:font-normal sm:text-dark-copy">
                  Shocking Lemon
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="flex justify-center space-x-4 align-middle font-bebas text-2xl">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "underline underline-offset-2"
                          : "hover:bg-gray-700 hover:text-white",
                        "px-3 py-1 rounded-md"
                      )}
                      aria-current={item.current ? "page" : undefined}
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
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);
export default Header;
