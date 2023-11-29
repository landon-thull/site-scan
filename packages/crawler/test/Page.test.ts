import { expect, test } from "vitest";
import { Page } from "../src/Page";
import * as cheerio from "cheerio";

const html = cheerio.load(
	`<html>
  <head>
  <title>Testing</title>
  </head>
  <body>
  <h1>Heading Here</h1>
  <h2>This is a heading</h2>
  
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
  
  <button>Click me to hide paragraphs</button>
  
  </body>
  </html>`
);

test("testing", () => {
	const p = new Page(html);

	expect(p.countElement("p")).toEqual(2);

	console.log(p.getTitle());
	console.log(p.getHeading());
});
