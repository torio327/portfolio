import Link from "next/link";
import {Young_Serif} from "next/font/google";

const YoungSerif = Young_Serif({
    weight:"400",
    preload:false,
})
export default function Footer(){
    return(
        <>
            <footer className={"bg-black"}>
                <nav className={"py-3"}>
                    <ul className="flex text-white justify-center ">
                        <li><Link href={"/About"} className={"mx-6"}>About</Link></li>
                        <li><Link href={"/Blog"} className={"mx-6"}>Blog</Link></li>
                        <li><Link href={"/Contact"} className={"mx-6"}>Contact</Link></li>
                    </ul>
                </nav>
<div className="flex justify-center py-5">
    <div className="w-fit">
        <Link href={"/"} className={YoungSerif.className}><h1 className="text-4xl text-white">Portfolio</h1></Link>
    </div>
</div>

            </footer>
        </>
    )
}