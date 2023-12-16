"use client";

import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";
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
  const [totalPages, setTotalPages] = useState(0);

  const fetchPayouts = useCallback(async () => {
    const payouts = await getPayouts(
      pagination.page,
      pagination.elementsPerPage
    );

    setPayouts(payouts.data);
    setTotalPages(
      Math.ceil(payouts.metadata.totalCount / pagination.elementsPerPage)
    );
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
  }, [fetchPayouts, pagination, totalPages]);

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
        {loading ? <Loader /> : <Table data={payouts} />}
        <Pagination
          currentPage={pagination.page}
          totalPage={totalPages}
          onPageChange={(page) => setPagination({ ...pagination, page: page })}
        />
      </Wrapper>
    </main>
  );
}
