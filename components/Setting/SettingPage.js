import { useRouter } from 'next/router';

const SettingPage = () => {
  const router = useRouter();
  const { section } = router.query;

  let page;
  switch (section) {
    case "personal-details":
      page = <>personal-details</>
      break
    case "billing-address":
      page = <>Billing address</>
      break
    case "professinal":
      page = <>Switch to professinal</>
      break
  }
  return (
    <div className="main-section-outer-container min-body-section-container setting-page-outer-container">
      <div className="col-20">
        <button className='btn-link'>Personal details</button>
        <button className='btn-link'>Billing address</button>
        <button className='btn-link'>Switch to professinal</button>
      </div>
      <div className="col-80">{page}</div>
    </div>
  )
}

export default SettingPage