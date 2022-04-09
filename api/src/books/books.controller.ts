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

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(
    @Body()
    bookData: {
      title: string;
      author: string;
      genre: string;
      outOfPrint: boolean;
      publisher: string;
      publishDate: Date;
      authorId: number;
      authorEmail: string;
    },
  ): Promise<BookModel> {
    const { title, genre, outOfPrint, publishDate, authorEmail } = bookData;
    return this.booksService.createBook({
      title,
      genre,
      outOfPrint,
      author: {
        connect: { email: authorEmail },
      },
      publishDate: '',
    });
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: PrismaService) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
