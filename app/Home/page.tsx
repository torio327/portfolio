'use client'
import {Header} from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import MotionX from "@/app/Components/MotionX";
import MotionxTwo from "@/app/Components/MotionxTwo";
import {Playfair_Display} from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
    weight: "400",
    preload: false,
});

export default function Home() {

    return (
        <>
            <div className="overflow-hidden">
                <div className="bg-fixed bg-[url('/image/sunset_half_trans.png')] bg-cover ">
                    <div className="opening">
                        <div className="h-screen">
                            <Header/>
                            <div className="text-7xl text-white flex justify-center items-center gap-x-20">
                                <div className="welcome"> Welcome</div>
                                <div className="to">To</div>
                                <div className="my">My</div>
                                <div className="portfolio">Portfolio</div>
                            </div>
                        </div>
                    </div>
                        <div className={"w-screen h-[700px] pt-[100px] bg-white opacity-80"}>
                            <div className="titleOne">
                                <MotionX>
                                    <div className="pt-40 text-center text-7xl gap-x-20 ">
                                        <h1 className={playfair.className}><span className={'mx-10'}>About</span><span
                                            className={'mx-10'}> this</span><span className={'mx-10'}>portfolio</span>
                                        </h1>
                                    </div>
                                </MotionX>

                            </div>

                            <div className="w-screen ">
                                <div className={"my-32 flex justify-center gap-x-[50px]"}>
                                    <MotionxTwo> <div className="  w-[300px]">
                                        <p className={'text-black'}> このポートフォリオサイトでは、プロフィール、プログラミングを始めた経緯、ブログをまとめてあります</p>
                                        <p className={'text-'}>また、web制作の依頼も可能です</p>
                                    </div></MotionxTwo>


                                </div>

                            </div>
                        </div>
                        <div className={"w-screen h-screen"}>
                            <MotionX>
                                <h1 className={`${playfair.className} pt-20 text-7xl text-center`}>Profile</h1>
                            </MotionX>

                            <div className="">
                                <MotionxTwo>   <div className={"my-32 flex justify-center gap-x-[50px]"}>
                                    <div className={"bg-white h-[100px]"}>
                                        <Image src={"/image/dog_pug.png"} alt={'pug'} width={100} height={100}/>
                                    </div>

                                    <div className="  w-[300px]">
                                        <p className={''}>愛知県出身のエンジニアです。高校の頃は機械について勉強していました。大学ではフロンティア工学類（機械と電子情報を組み合わせた学類）に所属しています。
                                            子供のころから、
                                            折り紙や紙工作など何かを作ることが好きでした。
                                            高校の頃, 友達に「プログラミングをやってみないか」と言われたことがきっかけで始めました。
                                        </p>

                                    </div>



                                </div>  </MotionxTwo>

                            </div>
                        </div>

                      <div className="mt-20">
                        <Footer/>
                    </div>


                </div>
            </div>

        </>
    )
}
