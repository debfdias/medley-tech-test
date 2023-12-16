import { IPayout } from "@/app/interfaces/IPayout";

interface TableProps {
  data: IPayout[];
}

export default function Table({ data }: TableProps) {
  return (
    <>
      <>
        {data.map((item: any) => {
          return <>{JSON.stringify(item)}</>;
        })}
      </>
    </>
  );
}
