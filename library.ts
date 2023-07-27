class Library {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book): void {
    if (!book) {
      throw new Error('Invalid book object. Book is required.');
    }
    this.books.push(book);
  }

  searchByTitle(title: string): Book[] {
    return this.books.filter((book) =>
      book.getTitle().toLowerCase().includes(title.toLowerCase())
    );
  }

  searchByAuthor(author: string): Book[] {
    return this.books.filter((book) =>
      book.getAuthor().toLowerCase().includes(author.toLowerCase())
    );
  }

  getTotalBooks(): number {
    return this.books.length;
  }
}
