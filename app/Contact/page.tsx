"use client"
import {Header} from "@/app/Components/Header";
import emailjs from "@emailjs/browser";
import {useRef, useState} from "react";
import Footer from "@/app/Components/Footer";
import MotionWrapper from "@/app/Components/MotionWrapper";
import {Cousine} from "next/font/google";

const Cous = Cousine({
    weight: "400",
    preload: false,
})

export default function Page() {
    const form: any = useRef<HTMLElement>(null);
    const [load, setLoad] = useState(false)

    const sendEmail = (e: any) => {
        e.preventDefault();
        setLoad(true);


        emailjs.sendForm('React-form', 'React-form', form.current, process.env.NEXT_PUBLIC_PUBLICKEY)
            .then((result) => {
                setLoad(false);
                console.log(result.text);
                const success = '送信が完了しました。'
                const successElement = document.querySelector('.success');
                const buttonElement = document.querySelector('.form-button');

                if (successElement) {
                    successElement.innerHTML = success;
                }
                if (buttonElement) {
                    buttonElement.className = 'bg-green-500'
                }
            }, (error) => {
                setLoad(false);
                console.log(error.text);
                const fail: string = '送信に失敗しました。';
                const failElement = document.querySelector('.success');
                const buttonElement = document.querySelector('.form-button');
                if (failElement) {
                    failElement.innerHTML = fail
                }
                if (buttonElement) {
                    buttonElement.className = 'bg-red-500 h-10'
                }
            })
    }
    return (
        <div className={"back"}><MotionWrapper>
            <div className={"bg-fixed bg-center bg-[url('/image/brown_half_trans.png')] bg-cover w-fill "}>
                <Header/>
                <h1 className={`${Cous.className} text-4xl text-white text-center mt-18`}>contact</h1>
                <section className=" ">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

                        <p className="mb-8 lg:mb-16 font-light text-center text-black dark:text-gray-400 sm:text-xl">
                            制作の依頼・ご相談などお気軽にお問い合わせくださいませ。<br/>
                            下記フォームよりわかる範囲でご記入ください。必須の項目は必ずご記入お願いします。
                        </p>
                        <form ref={form} onSubmit={(e) => sendEmail(e)} className="space-y-8">
                            <div className="">
                                <label htmlFor="company-name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">貴社名</label>
                                <input placeholder={""} type="name" name={"company-name"} id={"company-name"}
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 drk:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"/>
                            </div>
                            <div>
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">お名前<span
                                    className={"ml-5 text-red-500"}>＜必須＞</span></label>
                                <input placeholder={""} type="name" id={"name"} name={"name"} required={true}
                                       className={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 drk:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"}/>
                            </div>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">メールアドレス<span
                                    className={"ml-5 text-red-500"}>＜必須＞</span></label>
                                <input type="email" id="email" name={"email"}
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       placeholder="name@flowbite.com" required/>
                            </div>
                            <div>
                                <label htmlFor="tel"
                                       className={"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}>電話番号</label>
                                <input type="tel" name={"tel"} id={"tel"}
                                       className={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark dark:focus:ring-primary-500 dark:gocus:border-primary-500 dark:shadow-sm-light"}/>
                            </div>
                            <div>
                                <label htmlFor="menu">内容</label>
                                <select name="select" id="menu"
                                        className={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark dark:focus:ring-primary-500 dark:gocus:border-primary-500 dark:shadow-sm-light"}>
                                    <option value="質問">質問</option>
                                    <option value="仕事の依頼">仕事の依頼</option>
                                    <option value="その他">その他</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">メッセージ</label>
                                <textarea id="message" name={"message"}
                                          className="h-[200px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="内容"></textarea>
                            </div>

                            <div className={"flex justify-center"}>
                                <button className={"bg-blue-500 rounded-lg w-20 h-10 mx-auto "}>
                                    {load ? (<p>送信中</p>) :
                                        (<p>送信</p>)
                                    }</button>

                            </div>
                            <div className="form-button">
                                <div className="z-3 text-center">
                                    <div className="success"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </MotionWrapper>
            <div className="">
                <Footer/>
            </div>

        </div>
    )
}