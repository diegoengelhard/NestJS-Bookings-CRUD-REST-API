import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    // Inject the ConfigService to get the DATABASE URL
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL // get the DATABASE URL from the .env file
                },
            },
        });
        console.log('Successfully connected to the database!');
    }
}
