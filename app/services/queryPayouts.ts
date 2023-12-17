import axios from "axios";

interface IQueryPayout {
  search: string;
}

export default async function queryPayouts(search: string) {
  try {
    const payouts = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search`,
      {
        params: { query: search },
      }
    );
    return payouts.data;
  } catch (error) {
    return;
  }
}
