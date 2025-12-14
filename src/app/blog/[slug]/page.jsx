import { notFound } from "next/navigation";

const getPost = async (slug) => {
  var url = new URL(`https://api.drivem1.de/article/articles/${slug}/`);

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

export const generateMetadata = async ({ params }) => {
  const slug = (await params).slug;
  const data = await getPost(slug);

  return {
    title: data.title,
    description:
      data.short_desc || "Lese diesen interessanten Artikel auf dem M1 Academy Blog.",
    openGraph: {
      title: data.title,
      description: data.short_desc,
      images: [
        {
          url: data.photo,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
  };
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

const page = async ({ params }) => {
  const slug = (await params).slug;

  const data = await getPost(slug);

  return (
    <main id="blog-detail-page" className="wrapper">
      <div className="head flex-col">
        <h1>{data.title}</h1>
        <small>{formatDateGerman(data.published_at)}</small>
        <img src={data.photo} alt={data.title} />
        <p>{data.short_desc}</p>
      </div>

      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </main>
  );
};

export default page;
