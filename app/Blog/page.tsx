"use client"
import {Header} from "@/app/Components/Header";
import {useEffect, useState} from "react";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import MotionWrapper from "@/app/Components/MotionWrapper";
import {Cousine, Klee_One} from "next/font/google";
import {gsap} from "gsap";

const API:any=process.env.NEXT_PUBLIC_API_BASE_URL

const KleeOne = Klee_One({
    weight: "400",
    preload: false,
})

const Cous = Cousine({
    weight: "400",
    preload: false
})

type Post = {
    id: number
    title: {
        rendered: string
    }
    content: {
        rendered: string
    }
}
const fetchPosts = async (): Promise<Post[]> => {
    try {
        const res = await fetch(API);
        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

export default function Page() {
    const [posts, setPosts] = useState<Post[]>([])
    const [showPosts, setShowPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        fetchPosts()
            .then((data) => {
                setPosts(data);
                setShowPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            });
    }, []);

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
        search(event.target.value)
    }
    const search = (value: any) => {
        if (value === "") {
            setShowPosts(posts)
            return posts;
        } else {
            const searchPosts = posts.filter(
                (post:Post) => {
                    if (post.title.rendered && post.content.rendered) {
                        const titleMatch = post.title.rendered.toUpperCase().includes(value.toUpperCase());
                        const contentMatch = post.content.rendered.toUpperCase().includes(value.toUpperCase())

                        console.log(titleMatch || contentMatch);
                        return titleMatch || contentMatch;
                    }
                    return false;
                }
            )
            setShowPosts(searchPosts);
        }

    }

    const move = (kazu: number) => {
        localStorage.setItem("Input", String(kazu))
    }
        gsap.set('.itemlist',{
            y:30,
            opacity:0
        })
        gsap.to('.itemlist',1,{
            y:0,
            opacity:1,
            ease:'expo.out',
            stagger:{
                each:.5,
                from:'start'
            }
        })


    return (
        <div className={"back"}><MotionWrapper>
            <div className="bg-fixed bg-[url('/image/pink.jpg')] bg-cover">
                <Header/>
                <h1 className={`${Cous.className} text-4xl text-center mt-18 text-white`}>Blog</h1>
                <div className="py-8">

                </div>
                <div className={"flex justify-center mt-2 mb-8"}>
                    <p className={`${KleeOne.className} w-[800px] text-center sm:text-xl text-gray-500`}>このブログでは、身近なこと、身近な問題、興味を持ったことを書きます</p>
                </div>
                <div className="text-center">
                    <h1 className={"text-3xl"}>検索</h1>
                    <input type="text" value={inputValue} onChange={handleInputChange}
                           className={"bg-gray-200 border border-gray-800"} placeholder={"半角英数字"}/>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className={"flex flex-wrap"}>
                        {showPosts.map((info) => (

                                <div key={info.id}
                                     className={"border-2 border-white border-opacity-60 rounded-lg overflow-hidden w-1/4 h-[350px] m-12"}>
                                    <div className="itemlist"><div className="h-[310px] overflow-hidden">
                                        <h2 className={`${KleeOne.className} text-center text-2xl mt-3 underline`}>{info.title.rendered}</h2>
                                        <div className={""}>
                                            <div dangerouslySetInnerHTML={{__html: info.content.rendered}}
                                                 className={`${KleeOne.className} text-center mt-3`}></div>
                                        </div>
                                    </div>
                                    <div className={"text-center"}>
                                        <Link href={`/Blogblog`} onClick={() => {
                                            move(info.id)
                                        }} className={"text-blue-400 underline"}>さらに読む</Link>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                )
                }</div>
        </MotionWrapper>

            <div className={""}>
                <Footer/>
            </div>

        </div>
    )
}
