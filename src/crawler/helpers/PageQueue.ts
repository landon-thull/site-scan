export class PageQueue {
  visited: Set<string>;
  toVisit: Set<string>;

  constructor() {
    this.visited = new Set<string>();
    this.toVisit = new Set<string>();
  }

  next(): string | null {
    // return null if no links left
    if (this.toVisit.size == 0) {
      return null;
    }

    let nextUrl = this.toVisit.values().next().value;

    this.toVisit.delete(nextUrl);
    this.visited.add(nextUrl);

    return nextUrl;
  }

  add(url: string): void {
    if (!this.visited.has(url) && !this.toVisit.has(url)) {
      this.toVisit.add(url);
    }
  }
}
