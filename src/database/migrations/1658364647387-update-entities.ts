import {MigrationInterface, QueryRunner} from "typeorm";

export class updateEntities1658364647387 implements MigrationInterface {
	name = "updateEntities1658364647387";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "type"`);
		await queryRunner.query(`ALTER TABLE "jobs" ADD "type" text NOT NULL`);
		await queryRunner.query(
			`ALTER TABLE "jobs" ALTER COLUMN "mon_income" TYPE numeric`
		);
		await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "type_education"`);
		await queryRunner.query(
			`ALTER TABLE "clients" ADD "type_education" text NOT NULL`
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
		await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "type_education"`);
		await queryRunner.query(
			`ALTER TABLE "clients" ADD "type_education" character varying NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE "jobs" ALTER COLUMN "mon_income" TYPE numeric`
		);
		await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "type"`);
		await queryRunner.query(
			`ALTER TABLE "jobs" ADD "type" character varying NOT NULL`
		);
	}
}
