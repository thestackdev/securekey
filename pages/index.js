import Header from 'components/Header'
import Progressbar from 'components/Progressbar'
import Response from 'components/Response'
import TextInput from 'components/TextInput'

export default function Home() {
  return (
    <div className="flex flex-col items-center flex-grow mt-8 w-full">
      <Header />
      <TextInput />
      <Progressbar />
      <Response />
    </div>
  )
}
