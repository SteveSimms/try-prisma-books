todo
front end

## Api endpoints localhost:3000/books for all books and localhost:3000/books/:id for one book

## [] Books component Acceptance criteria

[x] Display books from db in a card grid layout with image pending
[x] Add padding to the bottom row of cards
[x] add the appropriate imgs to cards in the db we are using img url for now
[!x] fixed padding issue in rendered cards note: always inspect the dom styles to see what is actually being applied to the element and then fix the issue by applying manual styles if need be
[x] use array.slice(0,150) so the card sizes are uniform
[x] add ...see more and see ...less for description information if description is longer than 150 characters description.slice(0,150) + '...see more' else description is 150 characters or more show see less
[] add a bacground color and pick secondary and tersiary colors for the cards
[] add a hover effect for the cards
[] add a hover effect for the cards

## colors

[] add as background color color: 'rgb(148 163 184/var(--tw-text-opacity))'
[] sky id the place holder secondary color

[] google how to add image from form and how to convert it to a byte array in the db for storage
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
[] google how to add image from form and how to convert it to a byte array in the db for storage
