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
import queryPayouts from "./services/queryPayouts";
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

  function totalPagesCount(total: number, elements: number) {
    return Math.ceil(total / elements);
  }

  const fetchPayouts = useCallback(async () => {
    const payouts = await getPayouts(
      pagination.page,
      pagination.elementsPerPage
    );

    setPayouts(payouts.data);
    setTotalPages(
      totalPagesCount(payouts.metadata.totalCount, pagination.elementsPerPage)
    );
  }, [pagination]);

  const searchPayouts = useCallback(async () => {
    setLoading(true);
    const payouts = await queryPayouts(search);
    let formattedPayouts = [];

    formattedPayouts = payouts.slice(
      (pagination.page - 1) * pagination.elementsPerPage,
      pagination.elementsPerPage * pagination.page
    );

    if (payouts.length > 0 && formattedPayouts.length === 0) {
      formattedPayouts = payouts;
    }

    setPayouts(formattedPayouts);
    setTotalPages(totalPagesCount(payouts.length, pagination.elementsPerPage));
    if (formattedPayouts.length < pagination.page) {
      setPagination((pagination) => ({ ...pagination, page: 1 }));
    } else {
      setPagination({ ...pagination });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, pagination.page]);

  useEffect(() => {
    try {
      setLoading(true);
      if (search === "") {
        fetchPayouts();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [fetchPayouts, pagination, search, totalPages]);

  useEffect(() => {
    try {
      if (search.length > 0) {
        setTimeout(() => searchPayouts(), 500);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [search, searchPayouts]);

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
          noData={!!payouts.length}
        />
      </Wrapper>
    </main>
  );
}
