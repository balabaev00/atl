import {MigrationInterface, QueryRunner} from "typeorm";

export class updateClientEntity1658387989830 implements MigrationInterface {
	name = "updateClientEntity1658387989830";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "clients" ADD "spouse_id" character varying`
		);
		await queryRunner.query(
			`ALTER TABLE "clients" ADD CONSTRAINT "UQ_50c7ed37c2e05903ddcb4910b59" UNIQUE ("spouse_id")`
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
		await queryRunner.query(
			`ALTER TABLE "clients" ADD CONSTRAINT "FK_50c7ed37c2e05903ddcb4910b59" FOREIGN KEY ("spouse_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "clients" DROP CONSTRAINT "FK_50c7ed37c2e05903ddcb4910b59"`
		);
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
			`ALTER TABLE "clients" DROP CONSTRAINT "UQ_50c7ed37c2e05903ddcb4910b59"`
		);
		await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "spouse_id"`);
	}
}
