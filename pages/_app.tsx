import '@fontsource/raleway'
import '@fontsource/nanum-myeongjo'
import { Analytics } from "@vercel/analytics/next"
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import BaseLayout from '../components/BaseLayout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BaseLayout>
            <Component {...pageProps} />
            <Analytics />
        </BaseLayout>
    )
}

export default MyApp
