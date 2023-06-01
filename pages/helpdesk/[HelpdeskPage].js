import Membership from '@/components/Helpdesk/Membership'
import { navigateToPage } from '@/utils/navigate/navigator'
import Link from 'next/link'

const HelpdeskPage = () => {

  // let page =<>Page</>;
  const pageLinks = [
    {
      name : "Membership",
      navigateTo : "membership"
    },
    {
      name : "Ad Credits",
      navigateTo : "credits"
    },
    {
      name : "Terms & Condition",
      navigateTo : "terms"
    },
    {
      name : "Privacy & Policy",
      navigateTo : "privacy"
    },
    {
      name : "FAQ",
      navigateTo : "faq"
    },
    // {
    //   name : "",
    //   navigateTo : ""
    // },
    // {
    //   name : "",
    //   navigateTo : ""
    // },
    // {
    //   name : "",
    //   navigateTo : ""
    // },
  ]
  return (
    <div className="main-section-outer-container min-body-section-container setting-page-outer-container">
    <div className="left-col">
      {pageLinks.map((link) => (
        <Link href={navigateToPage(link.navigateTo)} key={link.navigateTo}><button className='btn-link'>{link.name}</button></Link>
      ))}
    </div>
    <div className="right-col">
        <Membership/>
    </div>
  </div>
  )
}

export default HelpdeskPage