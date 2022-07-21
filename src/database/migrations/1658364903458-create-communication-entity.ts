import {MigrationInterface, QueryRunner} from "typeorm";

export class createCommunicationEntity1658364903458 implements MigrationInterface {
	name = "createCommunicationEntity1658364903458";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "communications" ("id" character varying NOT NULL, "type" text NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_29ec793018d5d5ca19d40149e87" PRIMARY KEY ("id"))`
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
		await queryRunner.query(`DROP TABLE "communications"`);
	}
}
