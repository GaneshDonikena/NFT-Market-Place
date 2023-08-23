import React from "react"
import Image from "next/image"

//Internal import
import Style from "./Video.module.css"
import images from "../../img"

const Video = () => {
    return (
        <div className={Style.video}>
            <div className={Style.video_box}>
                <h1>
                    <span>🎬</span> The Videos
                </h1>
                <p>
                    Check out our hottest videos. View more and share more new perspectives on just
                    about any topic. Everyone's welcome.
                </p>

                <div className={Style.video_box_frame}>
                    <div className={Style.video_box_frame_left}>
                        <Image
                            src={images.NFTVideo}
                            alt="Video image"
                            width={1000}
                            height={600}
                            objectFit="cover"
                            className={Style.video_box_frame_left_img}
                        />
                    </div>

                    <div className={Style.video_box_frame_right}></div>
                </div>
            </div>
        </div>
    )
}

export default Video
