import * as cheerio from "cheerio";
import { Page } from "../Page";

export class PageLoader {
	/**
	 * Loads a url with cheerio
	 * @param url the url to load
	 * @returns a cheerio root containing the page from the url
	 */
	async load(url: URL): Promise<Page> {
		try {
			const response = await fetch(url.href);

			const html: string = await response.text();

			return new Page(cheerio.load(html));
		} catch {
			return Promise.reject(`Could not fetch URL '${url.toString()}'`);
		}
	}
}
