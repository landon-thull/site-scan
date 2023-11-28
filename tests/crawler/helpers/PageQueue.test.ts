import { expect, test } from "vitest";
import { PageQueue } from "../../../src/crawler/helpers/PageQueue";

const link = "https://www.website.com";
const link2 = "https://www.website.com/test";

test("duplicate pages are not added", () => {
  const pq = new PageQueue();

  pq.add(link);
  expect(pq.toVisit.size).toEqual(1);

  pq.add(link);
  expect(pq.toVisit.size).toEqual(1);

  pq.add(link2);
  expect(pq.toVisit.size).toEqual(2);
});

test("links are moved after being visited", () => {
  const pq = new PageQueue();

  pq.add(link);
  expect(pq.toVisit.size).toEqual(1);
  expect(pq.visited.size).toEqual(0);

  pq.add(link2);
  expect(pq.toVisit.size).toEqual(2);
  expect(pq.visited.size).toEqual(0);

  pq.next();
  expect(pq.toVisit.size).toEqual(1);
  expect(pq.visited.size).toEqual(1);

  pq.next();
  expect(pq.toVisit.size).toEqual(0);
  expect(pq.visited.size).toEqual(2);

  pq.next();
  expect(pq.toVisit.size).toEqual(0);
  expect(pq.visited.size).toEqual(2);
})
