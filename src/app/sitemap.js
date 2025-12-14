export const revalidate = 3600; // Revalidate every hour

export default async function sitemap() {
  const baseUrl = "https://drivem1.de";

  // Fetch all blog posts from the API
  const getAllBlogPosts = async () => {
    const posts = [];
    let page = 1;
    let hasMorePages = true;

    while (hasMorePages) {
      try {
        const url = new URL("https://api.drivem1.de/article/articles/");
        url.searchParams.set("page", page);

        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });

        if (!res.ok) {
          hasMorePages = false;
          break;
        }

        const data = await res.json();

        if (data.results && data.results.length > 0) {
          posts.push(...data.results);
          page++;
          // Check if there are more pages by checking if 'next' is not null
          if (!data.next) {
            hasMorePages = false;
          }
        } else {
          hasMorePages = false;
        }
      } catch (error) {
        console.error("Error fetching blog posts for sitemap:", error);
        hasMorePages = false;
      }
    }

    return posts;
  };

  let blogPosts = [];
  try {
    blogPosts = await getAllBlogPosts();
  } catch (error) {
    console.error("Error in sitemap generation:", error);
  }

  // Create sitemap entries for blog posts
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated_at || post.published_at || new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Add static pages
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/class-a`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/class-b`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/7-14-days`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vr`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/theory-test`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/digital-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/financing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticUrls, ...blogUrls];
}
