import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";


export const loader = async () => {
    return json ({
        posts: [
        {
            slug: "my-first--post",
            title: "My First posts",

        },
        {
            slug: "90s-mixtape",
            title: "A Mixtape I made Just for you",

        },
    ],
    });
};

export default function Posts() {
    const { posts } = useLoaderData<typeof loader>();
    return(
        <main>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            to={post.slug}
                            className="text-blue-600 underline"
                            >
                                {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}; 

