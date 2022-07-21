import {MigrationInterface, QueryRunner} from "typeorm";

export class updatePassportEntity1658373246530 implements MigrationInterface {
	name = "updatePassportEntity1658373246530";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "passports" RENAME COLUMN "dateIssued" TO "date_issued"`
		);
		await queryRunner.query(
			`ALTER TABLE "jobs" ALTER COLUMN "mon_income" TYPE numeric`
		);
		await queryRunner.query(
			`ALTER TABLE "clients" ALTER COLUMN "mon_income" TYPE numeric`
		);
		await queryRunner.query(
			`ALTER TABLE "clients" ALTER COLUMN "mon_expenses" TYPE numeric`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "clients" ALTER COLUMN "mon_expenses" TYPE numeric`
		);
		await queryRunner.query(
			`ALTER TABLE "clients" ALTER COLUMN "mon_income" TYPE numeric`
		);
		await queryRunner.query(
			`ALTER TABLE "jobs" ALTER COLUMN "mon_income" TYPE numeric`
		);
		await queryRunner.query(
			`ALTER TABLE "passports" RENAME COLUMN "date_issued" TO "dateIssued"`
		);
	}
}
