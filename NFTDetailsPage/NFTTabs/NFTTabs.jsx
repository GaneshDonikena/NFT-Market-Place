import React, { useState } from "react"
import Image from "next/image"

//Internal import
import Style from "./NFTTabs.module.css"

const NFTTabs = ({ datatab, icon }) => {
    return (
        <div className={Style.NFTTabs}>
            {datatab.map((el, i) => (
                <div className={Style.NFTTabs_box} key={i + 1}>
                    <Image
                        src={el}
                        alt="profile image"
                        width={40}
                        height={40}
                        className={Style.NFTTabs_box_img}
                    />
                    <div className={Style.NFTTabs_box_info}>
                        <span>
                            Offer by $770 by <span>Ganesh bhai</span>
                            {icon}
                        </span>

                        <small>Jun 14 - 4:12 PM</small>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NFTTabs
