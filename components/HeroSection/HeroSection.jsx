import React, { useState, useEffect, useContext } from "react"
import Image from "next/image"

//Internal import
import Style from "./HeroSection.module.css"
import { Button } from "../componentsindex"
import images from "../../img"

//Smart contract import
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext"

const HeroSection = () => {
    const { titleData } = useContext(NFTMarketplaceContext)
    return (
        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                <div className={Style.heroSection_box_left}>
                    <h1>{titleData}</h1>
                    <p>Discover the most outstanding NFTs in all topics</p>
                    <Button btnName="Start your search" />
                </div>
                <div className={Style.heroSection_box_right}>
                    <Image src={images.hero} alt="Hero section" width={600} height={600} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
