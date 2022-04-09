import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaService } from '../prisma.service';
import { AuthorsService } from '../authors.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService, PrismaService, AuthorsService],
})
export class BooksModule {}
