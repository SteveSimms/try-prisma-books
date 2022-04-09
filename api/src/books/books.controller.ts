import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BooksService } from './books.service';

import {
  Book as BookModel,
  Author as AuthorModel,
  Book,
  Prisma,
} from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly prisma: PrismaService,
  ) {}

  // @Post()
  // createBook(
  //   @Body()
  //   bookData: {
  //     title: string;
  //     genre: string;
  //     outOfPrint: boolean;
  //     publisher: string;
  //     publishDate: string;
  //     authorId: number;
  //   },
  // ): Promise<BookModel> {
  //   const { title, genre, outOfPrint, publisher, publishDate, authorId } =
  //     bookData;
  //   return this.booksService.createBook({
  //     title,
  //     genre,
  //     outOfPrint,
  //     publisher,
  //     publishDate,
  //     authorId,
  //   });
  // }

  @Post()
  createBook(@Body() data: Book): Promise<BookModel> {
    return this.booksService.createBook(data);
  }

  @Get()
  async getAllBooks(): Promise<BookModel[]> {
    return this.booksService.findAll();
  }
  //works
  @Get('book/:id')
  async getBookById(@Param('id') id: string): Promise<BookModel> {
    return this.booksService.findOne({ id: +id });
  }
  //works
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Book): Promise<BookModel> {
    return this.booksService.update({ id: +id }, data);
  }
  //works
  @Delete(':id')
  remove(@Param('id') id: string): Promise<BookModel> {
    return this.booksService.remove(Number(id));
  }
}
