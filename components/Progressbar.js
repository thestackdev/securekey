import { passwordInput, passwordStrength } from 'state/passwordStrength'
import config from '../utils/config.json'

export default function Progressbar() {
  if (!passwordInput.value) return <></>

  console.log(config[passwordStrength.value.score].progress)

  return (
    <div className="w-full max-w-xl mt-2">
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          style={{
            width: config[passwordStrength.value.score].progress + '%',
            backgroundColor: config[passwordStrength.value.score].color,
          }}
        />
      </div>
    </div>
  )
}
