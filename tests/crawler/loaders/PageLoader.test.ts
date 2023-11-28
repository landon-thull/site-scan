import { expect, test } from "vitest";
import { PageLoader } from "../../../src/crawler/loaders/PageLoader";

const validLink = new URL("https://www.wikipedia.org");
const invalidLink = new URL("https://abc.abc.abc");

test("loads valid link", async () => {
	const pl = new PageLoader();

	const page = await pl.load(validLink);

	expect(page("title")).not.toBeNull();
});

test("throws error when given invalid link", async () => {
	const pl = new PageLoader();

	await expect(pl.load(invalidLink)).rejects.toThrow(
		`Could not fetch URL '${invalidLink.toString()}'`
	);
});
