import {MigrationInterface, QueryRunner} from "typeorm";

export class createAllEntities1658364141691 implements MigrationInterface {
	name = "createAllEntities1658364141691";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "jobs" ("id" character varying NOT NULL, "type" character varying NOT NULL, "date_emp" TIMESTAMP NOT NULL, "date_dismissal" TIMESTAMP NOT NULL, "mon_income" numeric NOT NULL, "tin" character varying NOT NULL, "phone_number" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "fact_address" character varying, "jur_address" character varying, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "childs" ("id" character varying NOT NULL, "name" character varying, "surname" character varying, "patronymic" character varying, "dob" TIMESTAMP, "parent_id" character varying, CONSTRAINT "PK_4cba3c00b0b2a3aaff8e744f776" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "passports" ("id" character varying NOT NULL, "series" character varying NOT NULL, "number" character varying NOT NULL, "giver" character varying NOT NULL, "dateIssued" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_815eb61bea28dbd88b1a6b9207b" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "clients" ("id" character varying NOT NULL, "name" character varying, "surname" character varying, "patronymic" character varying, "dob" TIMESTAMP, "type_education" character varying NOT NULL, "mon_income" numeric, "mon_expenses" numeric, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "passport_id" character varying, "living_address" character varying, "reg_address" character varying, CONSTRAINT "REL_1322f0a119b5dd92593274bd81" UNIQUE ("passport_id"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "addresses" ("id" character varying NOT NULL, "zip_code" character varying, "country" character varying, "region" character varying, "city" character varying, "street" character varying, "house" character varying, "apartment" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`ALTER TABLE "jobs" ADD CONSTRAINT "FK_b8fdba8e4a82584ab1b46c17ac6" FOREIGN KEY ("fact_address") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE "jobs" ADD CONSTRAINT "FK_3715a0227f4098cf0bbd45a4f46" FOREIGN KEY ("jur_address") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE "childs" ADD CONSTRAINT "FK_a83d4d7521c6b949d60d7c9a07f" FOREIGN KEY ("parent_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE "clients" ADD CONSTRAINT "FK_1322f0a119b5dd92593274bd818" FOREIGN KEY ("passport_id") REFERENCES "passports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE "clients" ADD CONSTRAINT "FK_cf92980ef75b6120f8df0d353fc" FOREIGN KEY ("living_address") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE "clients" ADD CONSTRAINT "FK_4629d5bdd7eeb2163bd76b4d082" FOREIGN KEY ("reg_address") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "clients" DROP CONSTRAINT "FK_4629d5bdd7eeb2163bd76b4d082"`
		);
		await queryRunner.query(
			`ALTER TABLE "clients" DROP CONSTRAINT "FK_cf92980ef75b6120f8df0d353fc"`
		);
		await queryRunner.query(
			`ALTER TABLE "clients" DROP CONSTRAINT "FK_1322f0a119b5dd92593274bd818"`
		);
		await queryRunner.query(
			`ALTER TABLE "childs" DROP CONSTRAINT "FK_a83d4d7521c6b949d60d7c9a07f"`
		);
		await queryRunner.query(
			`ALTER TABLE "jobs" DROP CONSTRAINT "FK_3715a0227f4098cf0bbd45a4f46"`
		);
		await queryRunner.query(
			`ALTER TABLE "jobs" DROP CONSTRAINT "FK_b8fdba8e4a82584ab1b46c17ac6"`
		);
		await queryRunner.query(`DROP TABLE "addresses"`);
		await queryRunner.query(`DROP TABLE "clients"`);
		await queryRunner.query(`DROP TABLE "passports"`);
		await queryRunner.query(`DROP TABLE "childs"`);
		await queryRunner.query(`DROP TABLE "jobs"`);
	}
}
