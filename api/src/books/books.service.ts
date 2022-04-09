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

  async books(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BookWhereUniqueInput;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput;
  }): Promise<Book[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.book.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  // findAll() {
  //   return `This action returns all books`;
  // }
  //get book by id
  async book(
    postWhereUniqueInput: Prisma.BookWhereUniqueInput,
  ): Promise<Book | null> {
    return this.prisma.book.findUnique({
      where: postWhereUniqueInput,
    });
  }
  // findOne(id: number) {
  //   return `This action returns a #${id} book`;
  // }

  async updateBook(params: {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.BookUpdateInput;
  }): Promise<Book> {
    const { data, where } = params;
    return this.prisma.book.update({
      data,
      where,
    });
  }

  // update(id: number, updateBook: PrismaService) {
  //   return `This action updates a #${id} book`;
  // }

  async deleteBookt(where: Prisma.BookWhereUniqueInput): Promise<Post> {
    return this.prisma.book.delete({
      where,
    });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
