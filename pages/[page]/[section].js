import { useRouter } from "next/router";

import ChatPage from "@/components/Chat/ChatPage";
import ProfilePage from "@/components/Page/ProfilePage";
import SettingPage from "@/components/Setting/SettingPage";
import withAuth from "@/hoc/OAuth/withAuth";

const Profile = () => {
  const router = useRouter();
  const { page } = router.query;

  let pageType = <></>

  switch (page) {
    case "p":
      pageType = <ProfilePage/>
      break;
    case "m":
      pageType = <ChatPage/>
      break;
    case "s":
      pageType = <SettingPage/>
      break;

  }
  return (pageType);
};

export default withAuth(Profile);
