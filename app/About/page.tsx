'use client'
import {Header} from "@/app/Components/Header";
import Image from "next/image";
import Footer from "@/app/Components/Footer";
import MotionWrapper from "@/app/Components/MotionWrapper";
import FadeUp from "@/app/Components/FadeUp";
import {Klee_One} from "next/font/google";
import {Cousine} from "next/font/google";

const Cous = Cousine({
    weight:"400",
    preload:false
})

const KleeOne =Klee_One ({
    weight:"400",
    preload:false,
})
export default function Page() {
    return (
        <div className={"back"}> <MotionWrapper>
            <div className={"bg-fixed bg-center bg-[url('/image/lake_half_trans.png')] bg-cover w-fill"}>
                <div>
                    <Header/>
                    <h1   className={`${Cous.className} text-4xl text-center text-white`}>About</h1>
                    <div className={"flex justify-center mt-20"}>
                        <p className={`${KleeOne.className} text-4xl`}>2022年からプログラミングの勉強を始めました。</p>
                    </div>
                </div>


                <div >
                    <FadeUp>
                        <div className={"relative py-[150px] "}>
                            <div className={"absolute ml-9 top-1/2 w-[500px] grid gap-y-4"}>
                                <p className={KleeOne.className}>最初は何を書いているのか、どう勉強したらいいのかわからなかった  </p>
                                    <p className={`${KleeOne.className} text-2xl`}>だけど、webサイトを作れるようになりたいという考えを胸にプログラミングを続けた</p>

                            </div>
                            <div className="flex justify-end">
                                <Image src={"/image/programing-pic-1.jpg"} alt={"pic1"} width={600} height={400}
                                       className={"mr-8"}/>
                            </div>
                        </div>
                    </FadeUp>
        </div>

                <FadeUp>
                    <div className={" flex mt-56"}>
                        <div className="ml-9">
                            <Image src={"/image/problem-1.jpg"} alt={"pic1"} width={600} height={400}/>
                        </div>
                        <div className={"relative"}>
                            <div className={"absolute top-1/2  w-[500px] ml-28 grid gap-y-4"}>
                                <p className={KleeOne.className}>
                                    幾度もエラーに悩まさせ、思うようにコーディングできなくなった時もあった<br/>
                                    また、逃げ出したくもなった<br/>   </p>
                                    <p className={`${KleeOne.className} text-2xl`}>
                                        しかし、作ることが好きという気持ちは無くならなかった
                                    </p>
                            </div>

                        </div>
                    </div>
                </FadeUp>
                <div className="">
                    <FadeUp>
                        <div className={"relative mt-56 py-[150px]"}>
                            <div className={"absolute top-1/2 ml-9 w-[500px] grid gap-y-4"}>
                                <p className={`${KleeOne.className} text-2xl`}>勉強をし続けて、webサイトを作ることができるようになった<br/>
                                </p>
                               <p className={`${KleeOne.className} text-3xl`}>これからも満足してもらえるサイトを作り続けたい</p>
                            </div>
                            <div className="flex justify-end mr-9">
                                <Image src={"/image/web-designer-1.jpg"} alt={"pic1"} width={600} height={400}/>
                            </div>
                        </div>
                    </FadeUp>
                </div>

                <FadeUp>
                    <div className={"mt-56 flex pb-48"}>
                        <div className={"ml-9"}>
                            <Image src={"/image/web-design.jpg"} alt={"pic"} width={600} height={400}/>
                        </div>
                        <div className={"relative w-[600px] ml-28"}>
                            <div className={"absolute top-1/2 "}>
                                <p className={`${KleeOne.className} text-3xl`}>
                                    今後は<br/>
                                    アプリ制作をできるように勉強し続ける<br/>
                                    さらに期待に応えられるサイトの制作をする
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeUp>   </div>
            </MotionWrapper>

            <div className="">
                <Footer/>
            </div>


        </div>
    )
}