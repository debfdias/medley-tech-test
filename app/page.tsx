"use client";

import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Table from "./components/Table";
import { IPagination } from "./interfaces/IPagination";
import { IPayout } from "./interfaces/IPayout";
import getPayouts from "./services/getPayouts";
import { Wrapper } from "./styles";

export default function Home() {
  const [payouts, setPayouts] = useState<IPayout[]>([]);
  const [search, setSearch] = useState(null);
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

  return (
    <main>
      <Wrapper>
        <Header />
        {loading ? <Loader /> : <Table />}

        {payouts.map((item: any) => {
          return <>{JSON.stringify(item)}</>;
        })}
      </Wrapper>
    </main>
  );
}
