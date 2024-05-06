import { Fragment, useState, useEffect } from "react";
import MembersPage from "./MembersPage/MembersPage.jsx";
import DiscoverPage from "./DiscoverPage/DiscoverPage";
import TeamPage from "./TeamCompanyPage/TeamPage";
import CompanyPage from "./Company Page/CompanyPage.jsx";
import FAQPage from "./FAQ/FAQPage.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { CarouselCustomNavigation } from "./Company Page/Carousel_HomePage.jsx";
import Loader from "../components/Loader/Loader.jsx";
import useLoadData from "../hooks/useLoadData.js";

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { data } = useLoadData();

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <div className="flex flex-col overflow-x-hidden w-full bg-discoverWhite">
        {isLoading ? 
          (
            <Fragment>
              <Loader />
            </Fragment>
          ) : (
            <Fragment>
              <CarouselCustomNavigation data={data}/>
              <DiscoverPage data={data} />
              <TeamPage />
              <CompanyPage />
              <FAQPage data={data?.faq}/>
              <Footer />
            </Fragment>
          )}
      </div>
    </>
  );
}

export default LandingPage;
