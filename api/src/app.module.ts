import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrismaService } from './prisma.service';
import { AuthorsModule } from './authors/authors.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BooksModule, AuthorsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
