import { LockClosedIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { passwordInput, passwordStrength } from 'state/passwordStrength'
import zxcvbn from 'zxcvbn'

export default function TextInput1() {
  useEffect(() => {
    if (passwordInput.value)
      passwordStrength.value = zxcvbn(passwordInput.value)
  }, [passwordInput.value])

  return (
    <form className="w-full max-w-xl mt-8" onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <LockClosedIcon
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          id="password"
          type="text"
          placeholder="Your super secure password"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={passwordInput.value}
          onChange={(e) => (passwordInput.value = e.target.value)}
          autoComplete="off"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  )
}
