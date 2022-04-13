import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const booksPool = [];
    for (const book of value) {
      if (
        book['title'] === filterString ||
        book['firstName'] === filterString ||
        book['lastName'] === filterString ||
        book['genre'] === filterString ||
        book['title'] === filterString.toLocaleLowerCase() ||
        book['firstName'] === filterString.toLocaleLowerCase() ||
        book['lastName'] === filterString.toLocaleLowerCase() ||
        book['genre'] === filterString.toLocaleLowerCase()
      ) {
        booksPool.push(book);
      }
      console.log('filter pipe', book.title);
    }
    return booksPool;
  }
}
