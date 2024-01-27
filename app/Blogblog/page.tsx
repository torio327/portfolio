"use client"
import { useEffect, useState } from "react";
import React from "react";
import {Header} from "@/app/Components/Header";
import MotionWrapper from "@/app/Components/MotionWrapper";


type Post = {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
};


const fetchPost = async (id: number): Promise<Post> => {
    const res = await fetch(`http://torio-blog.local/wp-json/wp/v2/posts/${id}`);
    const data = await res.json();
    console.log(data)
    return data;


};

const Page= () => {
    const [post, setPost] = useState<Post | null>(null);
    const num =localStorage.getItem("Input")
    if (num !==null){
        const numValue:number=parseInt(num,10);

        useEffect(() => {
            fetchPost(numValue).then((data) => {
                setPost(data);
                console.log(data); // データが取得されたらログに出力
            });
        }, [numValue]);
    }



    if (!post) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <MotionWrapper>
                <div>
                    <Header/>
                    <div className={"mt-14"}>
                        <h2 className={'text-5xl text-center'}>{post.title.rendered}</h2>
                        <div className="flex justify-center ">  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className={"mt-10 mb-20 w-[900px]"}></div></div>
                    </div>

                </div>
            </MotionWrapper>

        </>
    );
};

export default Page;