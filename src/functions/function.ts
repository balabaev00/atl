import * as uuid from "uuid";

/**
 * It returns a string that is a unique identifier
 * @returns A string
 */
export function getId(): string {
	const id: string = uuid.v4();

	return id;
}
