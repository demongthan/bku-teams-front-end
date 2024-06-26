import Link from 'next/link'
import React from 'react'
import LightDarkToggle from './toggle/LightDarkToggle '

const Header = () => {
  return (
    <header className="px-8 py-4 border-b">
        <div className="max-w-full mx-auto flex flex-row items-center justify-between">
            <Link href={"/"}>BKUTeams</Link>
            <form className="hidden md:w-1/2 lg:w-1/3 mx-auto border rounded-lg border-purple-700 md:flex flex-row items-center justify-between">
                <input
                    className="w-full px-4 py-2 rounded-tl-lg rounded-bl-lg focus:outline-purple-500 dark:bg-gray-100 dark:text-black"
                    type="email"
                    placeholder="Enter your email"
                />
                <button className="py-2 px-4 bg-purple-700 text-white rounded-tr-lg rounded-br-lg">
                    Subscribe
                </button>
            </form>
            <nav className="flex flex-row items-center gap-4">
                    <LightDarkToggle />
                    <button>Sign in</button>
                    <button>Sign up</button>
                </nav>
        </div>
    </header>
  )
}

export default Header