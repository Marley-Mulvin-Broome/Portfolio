import { prisma } from "./prismaClient";

export async function getBlogs(limit: number) {
    return await prisma.post.findMany({
        take: limit,
        orderBy: {
            created_at: "desc"
        },
        select: {
            id: true,
            title: true,
            created_at: true,
            description: true,
            image: true,
            tags: true,
            slug: true
        },
        where: {
            published: true
        }
    });
}

export async function getBlogCount() {
    return await prisma.post.count({
        where: {
            published: true
        }
    });
}