import { expect, test } from "vitest";
import { UrlQueue } from "../../src/helpers/UrlQueue";

const link = new URL("https://www.website.com");
const link2 = new URL("https://www.website.com/test");

test("duplicate pages are not added", () => {
	const uq = new UrlQueue();

	uq.add(link);
	expect(uq.toVisit.size).toEqual(1);

	uq.add(link);
	expect(uq.toVisit.size).toEqual(1);

	uq.add(link2);
	expect(uq.toVisit.size).toEqual(2);
});

test("links are moved after being visited", () => {
	const uq = new UrlQueue();

	uq.add(link);
	expect(uq.toVisit.size).toEqual(1);
	expect(uq.visited.size).toEqual(0);

	uq.add(link2);
	expect(uq.toVisit.size).toEqual(2);
	expect(uq.visited.size).toEqual(0);

	uq.next();
	expect(uq.toVisit.size).toEqual(1);
	expect(uq.visited.size).toEqual(1);

	uq.next();
	expect(uq.toVisit.size).toEqual(0);
	expect(uq.visited.size).toEqual(2);

	uq.next();
	expect(uq.toVisit.size).toEqual(0);
	expect(uq.visited.size).toEqual(2);
});
