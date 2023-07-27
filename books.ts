class Book {
  private title: string;
  private author: string;
  private publicationYear: number;

  constructor(title: string, author: string, publicationYear: number) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getPublicationYear(): number {
    return this.publicationYear;
  }
  
  updateDetails(details: { title?: string; author?: string; publicationYear?: number }): void {
    if (!details) {
      throw new Error('Details object is required.');
    }

    const { title, author, publicationYear } = details;

    if (title !== undefined) {
      this.title = title;
    }

    if (author !== undefined) {
      this.author = author;
    }

    if (publicationYear !== undefined) {
      if (Number.isNaN(publicationYear) || publicationYear < 0) {
        throw new Error('Invalid publication year.');
      }
      this.publicationYear = publicationYear;
    }
  }
}


