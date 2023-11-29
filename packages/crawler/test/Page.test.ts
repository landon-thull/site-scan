import { expect, test } from "vitest";
import { Page } from "../src/Page";
import * as cheerio from "cheerio";

const html = cheerio.load(
	`<html>
  <head>
  <title>Example Title</title>
  </head>
  <body>
  <h1>Example Heading</h1>
  <h2>This is a heading</h2>
  
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
  
  <button>Click me to hide paragraphs</button>
  
  </body>
  </html>`
);

test("getTitle returns title", () => {
	const p = new Page(html);

	expect(p.getTitle()).toBe("Example Title");
});

test("getHeading returns heading", () => {
	const p = new Page(html);

	expect(p.getHeading()).toBe("Example Heading");
});

test("countElement returns correct count", () => {
	const p = new Page(html);

	expect(p.countElement("p")).toEqual(2);
});

test("hasElement returns correct value", () => {
	const p = new Page(html);

	expect(p.hasElement("button")).toBe(true);

	expect(p.hasElement("input")).toBe(false);
});
