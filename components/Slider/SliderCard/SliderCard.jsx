import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

//Internal import
import Style from "./SliderCard.module.css"
import images from "../../../img"
import LikeProfile from "../../LikeProfile/LikeProfile"

const SliderCard = ({ el, i }) => {
    return (
        <motion.div className={Style.sliderCard}>
            <div className={Style.sliderCard_box}>
                <motion.div className={Style.sliderCard_box_img}>
                    <Image
                        className={Style.sliderCard_box_img_img}
                        src={el.background}
                        alt="slider profile"
                        height={300}
                        width={400}
                        objectFit="cover"
                    />
                </motion.div>
                <div className={Style.sliderCard_box_title}>
                    <p>NFT video #1245</p>
                    <div className={Style.sliderCard_box_title_like}>
                        {/* <LikeProfile /> */}
                        <small>1 of 100</small>
                    </div>
                </div>

                <div className={Style.sliderCard_box_price}>
                    <div className={Style.sliderCard_box_price_box}>
                        <small>Current bid</small>
                        <p>1.00 ETH</p>
                    </div>

                    <div className={Style.sliderCard_box_price_time}>
                        <small>Remaining time</small>
                        <p>3h : 15m : 20s</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SliderCard
