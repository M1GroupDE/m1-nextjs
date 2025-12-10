import Link from "next/link";
import { notFound } from "next/navigation";
import Slider from "./Slider";

const getPosts = async (page) => {
  var url = new URL("https://api.drivem1.de/" + "article/articles/");
  url.searchParams.set("page", page || 1);

  const res = await fetch(url, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // cache: "force-cache",
    // next: { tags: ["blog-posts"] },
  });

  if (res.ok) {
    const data = await res.json();
    return data.results;
  }
  return notFound();
};

const formatDateGerman = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  const day = date.getDate();
  const month = date.toLocaleString("de-DE", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const page = async ({ searchParams }) => {
  const page = (await searchParams).page;

  const data = await getPosts(page);

  return (
    <main id="blog-page" className="wrapper">
      <Slider data={data.slice(0, 2)} />

      <div className="list">
        {data.map((item) => (
          <div key={item.id} className="list-item flex-row">
            <img src={item.photo} alt={item.title} />

            <div className="content flex-col">
              <div className="header flex-col">
                <h2>{item.title}</h2>
                <p>{item.short_desc}</p>
              </div>
              <div className="footer flex-row">
                <Link className="btn-pr" href={`/blog/${item.slug}`}>
                  Mehr lesen
                </Link>
                <small>{formatDateGerman(item.published_at)}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
