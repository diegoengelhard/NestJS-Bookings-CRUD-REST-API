import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    CreateBookmarkDto,
    EditBookmarkDto,
} from './dto';

@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService) { } // Inject Prisma service

    // Create bookmark, params: userId, dto body
    async createBookmark(userId: number, dto: CreateBookmarkDto) {
        const bookmark =
            await this.prisma.bookmark.create({
                data: {
                    userId,
                    ...dto,
                },
            });

        return bookmark;
    }

    // Get all bookmarks
    getBookmarks(userId: number) {
        return this.prisma.bookmark.findMany({
            where: {
                userId,
            },
        });
    }

    // Get a bookmark by id
    getBookmarkById(userId: number, bookmarkId: number) {
        return this.prisma.bookmark.findFirst({
            where: {
                id: bookmarkId,
                userId,
            },
        });
    }

    // Edit a user's bookmark, params: userId, bookmarkId, dto body
    async editBookmarkById(userId: number, bookmarkId: number, dto: EditBookmarkDto) {
        // get the bookmark by id
        const bookmark = await this.prisma.bookmark.findUnique({
            where: {
                id: bookmarkId,
            },
        });

        // check if user owns the bookmark
        if (!bookmark || bookmark.userId !== userId) {
            throw new ForbiddenException('Access to resources denied');
        }

        return this.prisma.bookmark.update({
            where: {
                id: bookmarkId,
            },
            data: {
                ...dto,
            },
        });
    }

    // Delete a user's bookmark, params: userId, bookmarkId
    async deleteBookmarkById(userId: number, bookmarkId: number) {
        const bookmark = await this.prisma.bookmark.findUnique({
            where: {
                id: bookmarkId,
            },
        });

        // check if user owns the bookmark
        if (!bookmark || bookmark.userId !== userId) {
            throw new ForbiddenException('Access to resources denied');
        }

        await this.prisma.bookmark.delete({
            where: {
                id: bookmarkId,
            },
        });
    }
}
