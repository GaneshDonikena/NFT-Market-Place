import React from "react"
import Image from "next/image"

//Internal import
import Style from "../styles/aboutus.module.css"
import { Brand } from "../components/componentsindex"
import images from "../img"
import { FaObjectUngroup } from "react-icons/fa"

const aboutus = () => {
    const founderArray = [
        {
            name: "Niamh O'Shea",
            position: "Co-founder and chief Executive",
            image: images.founder1,
        },
        { name: "Daniel Jame", position: "Co-founder and chief Executive", image: images.founder2 },
        { name: "Orla Dwyer", position: "Co-founder and chief Executive", image: images.founder3 },
        {
            name: "Dara Frazier",
            position: "Co-founder and chief Executive",
            image: images.founder4,
        },
    ]

    const factsArray = [
        {
            title: "10 millions",
            info: "Articles have been public around the world(as of sept.30,2022)",
        },
        {
            title: "100,000",
            info: "Registered users account (as of sept.30,2022)",
        },
        {
            title: "220+",
            info: "Countries and regions have our presence(as of sept.30,2022)",
        },
    ]
    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
                <div className={Style.aboutus_box_hero}>
                    <div className={Style.aboutus_box_hero_left}>
                        <h1>About Us.</h1>
                        <p>
                            We're impartial and independence and every day we create distinctive,
                            world-class programmes and content which inform, educate and entertain
                            millions of people in the around the world.
                        </p>
                    </div>

                    <div className={Style.aboutus_box_hero_right}>
                        <Image src={images.hero2} />
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>Founder</h2>
                    <p>
                        We're impartial and independent, and every day we create distinctive,
                        world-class programmes and content
                    </p>
                </div>

                <div className={Style.aboutus_box_founder}>
                    <div className={Style.aboutus_box_founder_box}>
                        {founderArray.map((el, i) => (
                            <div className={Style.aboutus_box_founder_box_img}>
                                <Image
                                    src={el.image}
                                    alt={el.name}
                                    width={250}
                                    height={200}
                                    className={Style.aboutus_box_founder_box_img_img}
                                />
                                <h3>{el.position}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>Fast Facts</h2>
                    <p>
                        We're impartial and independent, and every day we create distinctive,
                        world-class programmes and content
                    </p>
                </div>

                <div className={Style.aboutus_box_facts}>
                    <div className={Style.aboutus_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div className={Style.aboutus_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Brand />
        </div>
    )
}

export default aboutus
