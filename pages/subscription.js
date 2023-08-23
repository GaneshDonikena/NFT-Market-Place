import React from "react"

//Internal import
import Style from "../styles/subscription.module.css"
import Subscription from "../Subscription/Subscription"

const subscription = () => {
    const subscriptionArray = [
        {
            plan: "STARTER",
            price: "$5/mo",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customizations"],
            info: "Literally you probably haven't heard of them jean shorts",
        },
        {
            plan: "MEDIUM",
            price: "$15/mo",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customizations", "Call service"],
            info: "Literally you probably haven't heard of them jean shorts",
        },
        {
            plan: "ADVANCED",
            price: "$25/mo",
            popular: "",
            service: [
                "Automated Reporting",
                "Faster Processing",
                "Customizations",
                "Call service",
                "one on one meetup",
            ],
            info: "Literally you probably haven't heard of them jean shorts",
        },
    ]

    return (
        <div className={Style.subscription}>
            <div className={Style.subscription_box}>
                <div className={Style.subscription_box_info}>
                    <h1>Subscription</h1>
                    <p>Pricing to fit the needs of any company size.</p>
                </div>

                <div className={Style.subscription_box_box}>
                    {subscriptionArray.map((el, i) => (
                        <Subscription key={i + 1} i={i} el={el} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default subscription
