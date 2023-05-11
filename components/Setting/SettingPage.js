import { useRouter } from 'next/router';
import PersonalDetails from './PersonalDetails';
import BillingAddress from './BillingAddress';
import SwitchToProfessional from './SwitchToProfessional';

import { navigateToPage } from '@/utils/navigate/navigator';
import Link from 'next/link';

const SettingPage = () => {
  const router = useRouter();
  const { section } = router.query;

  let page;
  switch (section) {
    case "personal-details":
      page = <PersonalDetails/>
      break
    case "billing-address":
      page = <BillingAddress/>
      break
    case "professinal":
      page = <SwitchToProfessional/>
      break
  }
  return (
    <div className="main-section-outer-container min-body-section-container setting-page-outer-container">
      <div className="left-col">
        <Link href={navigateToPage("setting")}><button className='btn-link'>Personal details</button></Link>
        <Link href={navigateToPage("billingAddress")}><button className='btn-link'>Billing address</button></Link>
        <Link href={navigateToPage("switchProfessinal")}><button className='btn-link'>Switch to professinal</button></Link>
      </div>
      <div className="right-col">{page}</div>
    </div>
  )
}

export default SettingPage