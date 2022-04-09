import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  //implemented works
  createBook(data: Prisma.BookCreateInput): Promise<Book> {
    return this.prisma.book.create({ data });
  }
  //get all books works

  findAll() {
    return this.prisma.book.findMany();
  }
  //get book by id working

  findOne(data: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.findUnique({
      where: data,
    });
  }

  async update(
    where: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput,
  ): Promise<Book> {
    return this.prisma.book.update({
      where,
      data,
    });
  }

  // async deleteBook(where: Prisma.BookWhereUniqueInput): Promise<Book> {
  //   return this.prisma.book.delete({
  //     where,
  //   });
  // }

  remove(id: number) {
    return this.prisma.book.delete({ where: { id } });
  }
}
