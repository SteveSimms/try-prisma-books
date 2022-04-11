todo
front end

## Api endpoints localhost:3000/books for all books and localhost:3000/books/:id for one book

## [] Books component Acceptance criteria

[x] Display books from db in a card grid layout with image pending
[x] Add padding to the bottom row of cards
[x] add the appropriate imgs to cards in the db we are using img url for now
[] use array.slice(0,150) so the card sizes are uniform
[] google how to add imag from form and how to convert it to a byte array in the db for storage
[!]when rendering dynamic cards make sure to put the loop on the grid sizing of the cards like

<div class="col-sm-4" \*ngFor="let book of books">
[] search books by title or author
[] modal for adding books
[] render new books to grid in alphabetical order
[] as app grows display books by filter scifi should show sci fi etc...

back end
[x] add image to Books model
[x] add description field to books model
[] add authors firstName and lastName and description and image url to to books model
