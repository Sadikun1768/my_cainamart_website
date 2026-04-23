import Image from 'next/image'

export default function Logo() {
    return (
        <div>

            <Image
                className=''
                src="/china-logo.png"
                alt="Picture of china-logo"
                width={200}
                height={150}
            />

        </div>
    )
}
