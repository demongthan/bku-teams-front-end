import Link from "next/link"

const Footer = () => {
    return (
        <footer className="px-8 py-4 text-black">
            <div className="max-w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between dark:text-white">
                <Link href={"/"}>© 2023 Mind Boggling</Link>
                <div className="pt-4 md:pt-0 flex flex-col md:flex-row items-center md:gap-4 dark:text-white">
                    <p>Refund Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer