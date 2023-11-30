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

	hasElement(element: string): boolean {
		return this.$("body").find(element).length > 0;
	}

	getLinks(): URL[] {
		let anchors = this.$("a");

		let links: URL[] = [];
		var urlPattern = new RegExp(
			"^(https?:\\/\\/)?" + // validate protocol
				"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
				"((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
				"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
				"(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
				"(\\#[-a-z\\d_]*)?$",
			"i"
		); // validate fragment locator
		anchors.each((i: number, value: any) => {
			let href = this.$(value).attr("href");

			if (href && urlPattern.test(href)) {
				links.push(new URL(href));
			}
		});

		return links;
	}
}
