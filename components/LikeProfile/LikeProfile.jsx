import React from "react"
import Image from "next/image"

//Internal import
import Style from "./LikeProfile.module.css"
import images from "../../img"

const LikeProfile = () => {
    const imageArray = [images.user1, images.user2, images.user3, images.user4]

    return (
        <div className={Style.like}>
            {imageArray.map((el, i) => (
                <div className={Style.like_box} key={i + 1}>
                    <Image
                        src={el}
                        alt="image"
                        width={20}
                        height={20}
                        className={Style.like_box_img}
                    />
                </div>
            ))}
        </div>
    )
}

export default LikeProfile
