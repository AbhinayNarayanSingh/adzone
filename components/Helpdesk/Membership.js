import React from 'react'

const Membership = () => {
    const plans = [
        {   
            _id : "123",
            name : "Basic Plan",
            amount : "$4.99",
            validity : "3"
        },
        {
            _id : "1234",
            name : "Pro Plan",
            amount : "$9.99",
            validity : "6"
        },
        {
            _id : "12345",
            name : "Basic Plan",
            amount : "$19.99",
            validity : "12"
        },
    ]
    return (
        <div>
            <p>At AdZone, we understand the importance of connecting buyers and sellers in a seamless and efficient manner. We are thrilled to offer you an array of exclusive features through our membership plans. Let&apos;s take a closer look at what you can expect:</p>
            <ul>
                <li>Bulk Upload: Our membership plans empower you to effortlessly upload multiple listings in one go. Whether you are a frequent seller or a business looking to showcase your products or services, our bulk upload feature saves you valuable time and effort.</li>
                <li>Professional Account: Stand out from the crowd with our Professional Account option. Unlock enhanced visibility and reach a wider audience as we promote your business prominently on our platform. With a dedicated professional profile, you can showcase your offerings in a professional and engaging manner, attracting potential customers and increasing your sales.</li>
                <li>Member Badge: Get recognized as a trusted member of our community with our exclusive Member Badge. This badge not only adds credibility to your profile but also signifies that you are an active and reliable user on AdZone. Stand out from other sellers and earn the trust of buyers, giving them the confidence to engage with your listings.</li>
                <li>Messaging Feature: Engage in direct communication with other users through our secure messaging feature. Connect, negotiate, and finalize deals with ease. Whether you want to inquire about a listing, negotiate a price, or simply seek more information, our messaging system enables seamless communication between buyers and sellers.</li>
            </ul>

            <p>Now, let&apos;s dive into our membership plans:</p>

            <div>
                {plans.map(plan => (
                    <div key={plan._id}>
                        <h1>{plan.name}</h1>
                        <h2>{plan.amount} / {plan.validity} month</h2>
                    </div>
                ))}
            </div>

            <p>Choose the membership plan that best suits your needs and start maximizing your selling potential on AdZone today! Join our vibrant community and experience the convenience and benefits of our exclusive features.</p>
            <p>Please note that these features and membership plans may be subject to change. For the most up-to-date information, kindly refer to our website.</p>
            <p>Happy selling and happy buying at AdZone - Where Classifieds Come Alive!</p>
        </div>
    )
}

export default Membership