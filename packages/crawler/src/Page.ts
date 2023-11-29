export class Page {
	$: cheerio.Root;

	constructor(page: cheerio.Root) {
		this.$ = page;
	}

	getTitle(): string | null {
		if (this.$("head > title").length > 0) {
			return this.$("head > title").text();
		}

		return null;
	}

	getHeading(): string | null {
		if (this.$("h1").length > 0) {
			return this.$("h1").first().text();
		}

		return null;
	}

	countElement(element: string): number {
		return this.$("body").find(element).length;
	}
}
