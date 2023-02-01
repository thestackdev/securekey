import { passwordInput, passwordStrength } from 'state/passwordStrength'
import config from '../utils/config.json'

export default function Response() {
  if (!passwordInput.value) return <></>

  return (
    <div className="flex flex-col text-center gap-2 text-gray-800 dark:text-gray-200 my-8 w-full max-w-xl items-center">
      <span className="text-lg">It would take a computer about</span>
      <div
        className="p-3 w-fit"
        style={{
          backgroundColor: config[passwordStrength.value.score].color,
          color: [2, 3].includes(passwordStrength.value.score)
            ? 'black'
            : 'white',
        }}
      >
        <span className="text-lg font-bold text-center">
          {
            passwordStrength.value.crack_times_display
              ?.online_throttling_100_per_hour
          }
        </span>
      </div>
      <span className="text-lg">to crack your password</span>
      {passwordStrength.value.feedback.warning && (
        <span className="mt-8 w-full text-left font-bold text-lg">
          <strong className="text-yellow-300">Warning: </strong>
          {passwordStrength.value.feedback.warning}
        </span>
      )}
      {passwordStrength.value.feedback.suggestions.length > 0 && (
        <div className="flex mt-4 flex-col text-left w-full items-start">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Tips to increase your password strength:
          </h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {passwordStrength.value.feedback.suggestions.map((e, key) => {
              return <li key={key}>{e}</li>
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
