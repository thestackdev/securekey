import { Progress } from 'flowbite-react'
import config from '../utils/config.json'
import { passwordStrength, passwordInput } from 'state/passwordStrength'

export default function Progressbar() {
  if (!passwordInput.value) return <></>

  return (
    <div className="w-full max-w-xl mt-2">
      <Progress
        progress={config[passwordStrength.value.score].progress}
        color={config[passwordStrength.value.score].color}
      />
    </div>
  )
}
