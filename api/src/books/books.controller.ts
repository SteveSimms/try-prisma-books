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
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book as BookModel, Author as AuthorModel } from '@prisma/client';
import { AuthorsService } from '../authors.service';

@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    authorService: AuthorsService,
  ) {}

  @Post()
  createBook(
    @Body()
    bookData: {
      title: string;
      author: AuthorModel;
      genre: string;
      outOfPrint: boolean;
      publisher: string;
      publishDate: string;
      authorId: number;
      authorEmail: string;
    },
  ): Promise<BookModel> {
    const {
      title,
      author,
      genre,
      outOfPrint,
      publisher,
      publishDate,
      authorId,
    } = bookData;

    return this.booksService.createBook({
      title,
      // author,
      genre,
      outOfPrint,
      publisher,
      publishDate,
      // authorId,
    });
  }
  @Get()
  async getAllBooks(): Promise<BookModel[]> {
    return this.booksService.findAll();
  }
  // @Get()
  // findAllBooks(...args: any[]) {
  //   return this.booksService.findAllBooks(args);
  // }
  @Get('book/:id')
  async getBookById(@Param('id') id: string): Promise<BookModel> {
    return this.booksService.findOne(Number(id));
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.booksService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string) {
    // return this.booksService.update(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(Number(id));
  }
}
