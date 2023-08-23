import React from "react"
import Image from "next/image"
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialInstagram,
} from "react-icons/ti"

//Internal import
import Style from "./CollectionProfile.module.css"
import images from "../../img"

const CollectionProfile = () => {
    const CardArray = [1, 2, 3, 4]
    return (
        <div className={Style.collectionProfile}>
            <div className={Style.collectionProfile_box}>
                <div className={Style.collectionProfile_box_left}>
                    <Image
                        src={images.nft_image_1}
                        alt="nft image"
                        width={300}
                        height={300}
                        className={Style.collectionProfile_box_left_img}
                    />
                    <div className={Style.collectionProfile_box_left_social}>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                        <a href="#">
                            <TiSocialLinkedin />
                        </a>
                        <a href="#">
                            <TiSocialTwitter />
                        </a>
                    </div>
                </div>

                <div className={Style.collectionProfile_box_middle}>
                    <h1>Awesome NFTs collection</h1>
                    <p>
                        karafuru is home to 5,555 generative arts where colors reign supreme. Leave
                        the drab reality and enter the world of karafuru by Museum of Toys.
                    </p>
                    <div className={Style.collectionProfile_box_middle_box}>
                        {CardArray.map((el, i) => (
                            <div
                                className={Style.collectionProfile_box_middle_box_item}
                                key={i + 1}
                            >
                                <small>Floor price</small>
                                <p>${i + 1}95,4683</p>
                                <span>+ {i + 2}.11% </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionProfile
