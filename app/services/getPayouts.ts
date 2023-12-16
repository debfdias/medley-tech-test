import axios from "axios";

interface IFetchPayout {
  page: number;
  limit: number;
}

export default async function getPayouts(page: number, limit: number) {
  try {
    const payouts = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/payouts`,
      {
        params: {
          page,
          limit,
        },
      }
    );

    return payouts.data;
  } catch (error) {
    return;
  }
}
