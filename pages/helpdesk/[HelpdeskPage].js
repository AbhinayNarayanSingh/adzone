import Link from 'next/link'
import { useRouter } from 'next/router'

import { navigateToPage } from '@/utils/navigate/navigator'

import Membership from '@/components/Helpdesk/Membership'
import AdsCredits from '@/components/Helpdesk/AdsCredits'

const pageLinks = [
  {
    name : "Membership",
    navigateTo : "membership"
  },
  {
    name : "Paid Listings",
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
]

const HelpdeskPage = () => {

  const router = useRouter();
  const { HelpdeskPage } = router.query;

  let pageType = <></>

  switch (HelpdeskPage) {
    case "membership":
      pageType = <Membership/>
      break;
    case "ad-credits":
      pageType = <AdsCredits/>
      break;
    case "terms-and-condition":
      pageType = <Membership/>
      break;
  }

  // let page =<>Page</>;
  return (
    <div className="main-section-outer-container min-body-section-container setting-page-outer-container">
    <div className="left-col">
      {pageLinks.map((link) => (
        <Link href={navigateToPage(link.navigateTo)} key={link.navigateTo}><button className='btn-link'>{link.name}</button></Link>
      ))}
    </div>
    <div className="right-col">
        {pageType}
    </div>
  </div>
  )
}

export default HelpdeskPage