import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  post: any;
  constructor(private prisma: PrismaService) {}
  //implemented works
  async createBook(data: Prisma.BookUncheckedCreateInput): Promise<Book> {
    return await this.prisma.book.create({ data });
  }
  //get all books works

  async findAll() {
    return await this.prisma.book.findMany();
  }
  //get book by id working

  async findOne(data: Prisma.BookWhereUniqueInput) {
    return await this.prisma.book.findUnique({
      where: data,
    });
  }

  async update(
    where: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput,
  ): Promise<Book> {
    return await this.prisma.book.update({
      where,
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.book.delete({ where: { id } });
  }
}
