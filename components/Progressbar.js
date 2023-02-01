import { passwordInput, passwordStrength } from 'state/passwordStrength'
import config from '../utils/config.json'

export default function Progressbar() {
  if (!passwordInput.value) return <></>

  console.log({
    width: config[passwordStrength.value.score].progress + '%',
    backgroundColor: config[passwordStrength.value.score].color,
  })

  return (
    <div className="w-full max-w-xl mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{
          width: config[passwordStrength.value.score].progress + '%',
          backgroundColor: config[passwordStrength.value.score].color,
          backgroundOpacity: 0.5,
        }}
      ></div>
    </div>
  )
}
