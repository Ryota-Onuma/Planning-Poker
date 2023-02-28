CREATE OR REPLACE FUNCTION "public"."generate_id"() RETURNS TRIGGER AS $generate_id$
BEGIN
  NEW.id = md5(extract(epoch from now())::bigint::text || LPAD(nextval('timestamps_seq')::text, 20, '0')); 
  RETURN NEW;
END;
$generate_id$
LANGUAGE plpgsql; 

CREATE TRIGGER generate_id_trigger BEFORE INSERT ON "public"."users" FOR EACH ROW
EXECUTE PROCEDURE "public"."generate_id"();