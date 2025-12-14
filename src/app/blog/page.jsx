import Link from "next/link";
import { notFound } from "next/navigation";
import Slider from "./Slider";

export const metadata = {
  title: "Blog - Tipps und Wissenswertes rund um deinen Führerschein",
  description:
    "Lese interessante Artikel und Tipps rund um Führerschein, Fahrausbildung und Fahrsicherheit. Der Blog von M1 Academy mit hilfreichen Themen.",
};

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
    return data;
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
  const pageNum = parseInt((await searchParams).page) || 1;

  const data = await getPosts(pageNum);
  const posts = data.results;
  const totalCount = data.count;
  const hasNext = !!data.next;
  const hasPrev = !!data.previous;

  // Calculate total pages
  const postsPerPage = posts.length;
  const totalPages = Math.ceil(totalCount / postsPerPage);

  return (
    <main id="blog-page" className="wrapper">
      <Slider data={posts.slice(0, 2)} />

      <div className="list">
        {posts.map((item) => (
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

      {/* Pagination */}
      <div className="pagination flex-row">
        {pageNum > 1 && (
          <Link href={`/blog?page=${pageNum - 1}`} className="btn-pagination btn-pr">
            ←
          </Link>
        )}

        <div className="page-info">
          <span>
            Seite <strong>{pageNum}</strong> von <strong>{totalPages}</strong>
          </span>
          <span className="posts-count">({totalCount} Artikel insgesamt)</span>
        </div>

        {hasNext && (
          <Link href={`/blog?page=${pageNum + 1}`} className="btn-pagination btn-pr">
            →
          </Link>
        )}
      </div>
    </main>
  );
};

export default page;
