import * as cheerio from "cheerio";

export class PageLoader {
	/**
	 * Loads a url with cheerio
	 * @param url the url to load
	 * @returns a cheerio root containing the page from the url
	 */
	async load(url: URL): Promise<cheerio.Root> {
		try {
			const response = await fetch(url.href);

			const html: string = await response.text();

			return cheerio.load(html);
		} catch {
			return Promise.reject(`Could not fetch URL '${url.toString()}'`);
		}
	}
}
