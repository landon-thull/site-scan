export class PageQueue {
	visited: Set<URL>;
	toVisit: Set<URL>;

	constructor() {
		this.visited = new Set<URL>();
		this.toVisit = new Set<URL>();
	}

	/**
	 * Returns the next link in the page queue
	 *
	 * @returns the next link in the page queue or null
	 */
	next(): URL | null {
		// return null if no links left
		if (this.toVisit.size == 0) {
			return null;
		}

		let nextUrl = this.toVisit.values().next().value;

		this.toVisit.delete(nextUrl);
		this.visited.add(nextUrl);

		return nextUrl;
	}

	/**
	 * Adds a url to the page queue
	 *
	 * @param url the url to add to the page queue
	 */
	add(url: URL): void {
		if (!this.visited.has(url) && !this.toVisit.has(url)) {
			this.toVisit.add(url);
		}
	}
}
