CREATE TABLE "public"."users" ("id" text NOT NULL, "name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_users_updated_at"
BEFORE UPDATE ON "public"."users"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_users_updated_at" ON "public"."users" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';


CREATE OR REPLACE FUNCTION "public"."generate_id"() RETURNS TRIGGER AS $generate_id$
BEGIN
  NEW.id = md5(extract(epoch from now())::bigint::text || LPAD(nextval('timestamps_seq')::text, 20, '0')); 
  RETURN NEW;
END;
$generate_id$
LANGUAGE plpgsql; 

CREATE TRIGGER generate_id_trigger BEFORE INSERT ON "public"."users" FOR EACH ROW
EXECUTE PROCEDURE "public"."generate_id"();