import { useEffect } from 'react'
import { TextInput } from 'flowbite-react'
import { passwordInput, passwordStrength } from 'state/passwordStrength'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import zxcvbn from 'zxcvbn'

export default function TextInput1() {
  useEffect(() => {
    if (passwordInput.value)
      passwordStrength.value = zxcvbn(passwordInput.value)
  }, [passwordInput.value])

  return (
    <form className="w-full max-w-xl mt-8" onSubmit={(e) => e.preventDefault()}>
      <TextInput
        id="password"
        type="text"
        placeholder="Your super secure password"
        value={passwordInput.value}
        onChange={(e) => (passwordInput.value = e.target.value)}
        icon={LockClosedIcon}
        required={true}
        autoComplete="off"
      />
    </form>
  )
}
