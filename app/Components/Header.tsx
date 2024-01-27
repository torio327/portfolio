import Link from "next/link";
import {Young_Serif} from 'next/font/google'

const YoungSerif = Young_Serif({
    weight:"400",
    preload:false,
})
export const Header =()=>{
    return(
        <>
            <header>
                <div className="relative flex p-20">
                    <div className="logo">
                        <div className="w-fit">
                            <Link href={"/Home"} className={YoungSerif.className}><h1 className="text-4xl">Portfolio</h1></Link>
                        </div>
                    </div>
                        <nav className="absolute right-0 mr-20">
                                <ul className="text-2xl flex gap-[100px]">
                                    <li className=""><Link href={"/About"}>About</Link></li>
                                    <li className=""><Link href={"/Blog"}>Blog</Link></li>
                                    <li className=""><Link href={"/Contact"}>Contact</Link></li>
                                </ul>
                        </nav>
                    </div>



            </header>
        </>
    )
}