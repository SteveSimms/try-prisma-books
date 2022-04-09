import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  //implemented
  createBook(data: Prisma.BookCreateInput): Promise<Book> {
    return this.prisma.book.create({ data });
  }
  //get all books

  findAll() {
    return this.prisma.book.findMany();
  }
  //get book by id

  findOne(id: number) {
    return this.prisma.book.findUnique({
      where: { id },
    });
  }

  async update(params: {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.BookUpdateInput;
  }): Promise<Book> {
    const { data, where } = params;
    return this.prisma.book.update({
      data,
      where,
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
