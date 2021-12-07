import Image from 'next/image'
import BGImage from '../public/ferryOnSound.png'
import '@fontsource/nanum-myeongjo'

const Splash: React.VFC = () => {
  return (
    <div>
      <Image
        layout="fill"
        objectFit="cover"
        src={BGImage}
        alt="Ferry on Seattle sound"
      />
    </div>
  )
}

export default Splash
