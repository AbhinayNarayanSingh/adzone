import React, { useState } from 'react'

const Membership = () => {
    const [selectedPlan, setSelectedPlan] = useState({})
    const plans = [
        {
            _id: "123",
            name: "Basic Plan",
            amount: "CAD 4.99",
            validity: "30"
        },
        {
            _id: "123",
            name: "Individual Plan",
            amount: "CAD 9.99",
            validity: "90"
        },
        {
            _id: "12345",
            name: "Business Plan",
            amount: "CAD 14.99",
            validity: "180"
        },
    ]
    return (
        <div className='helpdesk-outer-container'>
            <h1>Discover the Power of AdZone Member</h1>
            <p>At AdZone, we understand the importance of connecting buyers and sellers in a seamless and efficient manner. We are thrilled to offer you an array of exclusive features through our membership plans. Let&apos;s take a closer look at what you can expect:</p>
            <ul>
                <li><span>Bulk Upload:</span> Our membership plans empower you to effortlessly upload multiple listings in one go. Whether you are a frequent seller or a business looking to showcase your products or services, our bulk upload feature saves you valuable time and effort.</li>
                <li><span>Pre-upload Image Option:</span> Our user-friendly platform allows you to pre-upload images before creating your listing, ensuring a seamless and visually appealing experience for potential buyers.</li>
                <li><span>Professional Account:</span> Stand out from the crowd with our Professional Account option. Unlock enhanced visibility and reach a wider audience as we promote your business prominently on our platform. With a dedicated professional profile, you can showcase your offerings in a professional and engaging manner, attracting potential customers and increasing your sales.</li>
                <li><span>Member Badge:</span> Get recognized as a trusted member of our community with our exclusive Member Badge. This badge not only adds credibility to your profile but also signifies that you are an active and reliable user on AdZone. Stand out from other sellers and earn the trust of buyers, giving them the confidence to engage with your listings.</li>
                <li><span>Messaging Feature:</span> Engage in direct communication with other users through our secure messaging feature. Connect, negotiate, and finalize deals with ease. Whether you want to inquire about a listing, negotiate a price, or simply seek more information, our messaging system enables seamless communication between buyers and sellers.</li>
            </ul>

            <p>Now, let&apos;s dive into our membership plans:</p>

            <div className='membership-plans-container'>
                {plans.map(plan => (
                    <div key={plan._id} className={`membership-plans ${selectedPlan.name === plan.name ? "active" : ""}`} onClick={() => setSelectedPlan(plan)}>
                        <h2>{plan.name}</h2>
                        <h3>{plan.amount}</h3>
                        <p>{plan.validity} days</p>
                    </div>
                ))}
            </div>

            <ul>
                <li><span>Basic Plan/Individual Plan:</span> Our Individual Plan allows you to create listings and connect with other users.</li>
                <li><span>Business Plan:</span> For entrepreneurs and businesses looking to expand their reach, our Business Account offers advanced features like bulk uploads, promotion of your business through targeted advertising, and a member badge to showcase your professionalism.</li></ul>

            <p>Choose the membership plan that best suits your needs and start maximizing your selling potential on AdZone today! Join our vibrant community and experience the convenience and benefits of our exclusive features.</p>

            <button className='btn mt-1' disabled={!selectedPlan._id} >Upgrade Now!</button>
        </div>
    )
}

export default Membership