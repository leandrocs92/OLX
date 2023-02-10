import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageArea } from './styled';
import AdItem from "../../components/partials/AdItem";
import useApi from "../../helpers/OlxAPI";

import { PageContainer } from "../../components/MainComponents";
import Cookies from "js-cookie";

const Page = () => {
  const api = useApi();

  const [account, setAccount] = useState();
  const [ads, setAds] = useState();

  useEffect(() => {
    const getAccount = async () => {
      const json = await api.getAccount(Cookies.get('token'));
      setAccount(json);
    }
    getAccount();
  }, []);

  console.log(account);

  return (
    <>
      <PageContainer>
        <PageArea>

          <div className="account">
            account
          </div>

          <div className="ads">
            ads
          </div>

        </PageArea>
      </PageContainer>
    </>
  );
}

export default Page;