import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const booksPool: any = [];

    //refine filter to filter tthe cards as I type
    for (const book of value) {
      if (
        book.title.toLocaleLowerCase() === filterString ||
        book.title === filterString.toLocaleLowerCase() ||
        book.title.includes(filterString) ||
        filterString === '' ||
        book.firstName.toLocaleLowerCase() === filterString ||
        book.firstName === filterString.toLocaleLowerCase() ||
        book.firstName.includes(filterString) ||
        book.lastName.toLocaleLowerCase() === filterString ||
        book.lastName === filterString.toLocaleLowerCase() ||
        book.lastName.includes(filterString) ||
        book.genre.toLocaleLowerCase() === filterString ||
        book.genre.includes(filterString) ||
        book.genre === filterString.toLocaleLowerCase()
      ) {
        booksPool.push(book);
      }
    }

    return booksPool;
  }
}
