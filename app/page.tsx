"use client";

import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";
import { IPagination } from "./interfaces/IPagination";
import { IPayout } from "./interfaces/IPayout";
import getPayouts from "./services/getPayouts";
import { HeaderContainer, Wrapper } from "./styles";

export default function Home() {
  const [payouts, setPayouts] = useState<IPayout[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    elementsPerPage: 10,
  });

  const fetchPayouts = useCallback(async () => {
    const payouts = await getPayouts(
      pagination.page,
      pagination.elementsPerPage
    );

    setPayouts(payouts.data);
  }, [pagination]);

  useEffect(() => {
    try {
      setLoading(true);
      fetchPayouts();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }

    // if (!!search) {
    //   // query
    // } else {

    // }
  }, [pagination, fetchPayouts]);

  useEffect(() => {
    console.log("searching!");
  }, [search]);

  return (
    <main>
      <Wrapper>
        <HeaderContainer>
          <Header />
          <SearchBox
            search={search}
            onChangeSearch={(inputSearch) => setSearch(inputSearch)}
          />
        </HeaderContainer>
        {search}
        {loading ? <Loader /> : <Table data={payouts} />}
      </Wrapper>
    </main>
  );
}
