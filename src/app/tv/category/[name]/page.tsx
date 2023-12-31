import { Card } from "@/components/Card";
import { getListItem, getTrending, getTvShows } from "@/services/tmdbAPI";
import Link from "next/link";

const getData = async (name:any) => {
  try {
    const items =
      name === "trending"
        ? await getTrending("tv")
        : await getTvShows(name);
    return { items };
  } catch {
    throw new Error("Data not available");
  }
}

export default async function TVCategories({
	params,
}: {
	params: {
		name: string;
	};
}) {
  const data = await getData(params.name)

  return (
    <main className="main">
      <div className="listing">
        <div className="listing__head">
          <h2 className="listing__title">{getListItem("tv", params.name)?.TITLE}</h2>
        </div>
        <div className="listing__items">
          {data?.items.results.map((item:any) => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </main>
  );
}
