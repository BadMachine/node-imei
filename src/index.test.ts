import {describe, expect, test} from "vitest";
import { isValid, getRandom, getImeiByDevice } from "./index";
import codes from "./TAC/codes";

describe("Invalid cases validation", () => {
	test("check empty", () => {
		expect(isValid("")).toBe(false);
	});

	test("check invalid", () => {
		expect(isValid("A8N0AS293801336")).toBe(false);
	});

	test("check short", () => {
		expect(isValid("1234125661")).toBe(false);
	});
})

describe("Test generated imei", () => {
	let imeis = Array.from({ length: 1337 }).fill(0).map(() => getRandom());

	test.each(imeis)('Validate array of random imeis', (imei) => {
		expect(isValid(imei)).toBe(true);
	});

	let imeis_no_model_apple = Array.from({ length: 40 }).fill(0).map(() => getImeiByDevice("Apple"));


	test.each(imeis_no_model_apple)('Test no particular model provided', (imei) => {
		expect(isValid(imei)).toBe(true);
	});

	test("Test apple", () => {
		const imei = getImeiByDevice("Apple", "iPhone5S");

		expect(isValid(imei)).toBe(true);
	});

	let imeis_no_model_htc = Array.from({ length: 40 }).fill(0).map(() => getImeiByDevice("HTC"));


	test.each(imeis_no_model_htc)('Test no particular model provided', (imei) => {
		expect(isValid(imei)).toBe(true);
	});

	test("Test HTC", () => {
		const imei = getImeiByDevice("HTC", "WildFire");
		expect(isValid(imei)).toBe(true);
	});

	let imeis_no_model_samsung = Array.from({ length: 40 }).fill(0).map(() => getImeiByDevice("Samsung"));


	test.each(imeis_no_model_samsung)('Test no particular model provided', (imei) => {
		expect(isValid(imei)).toBe(true);
	});

	test("Test Samsung", () => {
		const imei = getImeiByDevice("Samsung", "SMT5613474");
		expect(isValid(imei)).toBe(true);
	});

	test("Test Nokia", () => {
		const imei = getImeiByDevice("Nokia", "N9_3");
		expect(isValid(imei)).toBe(true);
	});

});
