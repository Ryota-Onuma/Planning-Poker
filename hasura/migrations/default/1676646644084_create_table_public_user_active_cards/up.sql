CREATE TABLE "public"."user_active_cards" ("id" serial NOT NULL, "room_user_id" text NOT NULL, "master_card" text NOT NULL DEFAULT 'ONE', "is_selected" boolean NOT NULL DEFAULT false, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id"), FOREIGN KEY ("room_user_id") REFERENCES "public"."room_users"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("master_card") REFERENCES "public"."master_cards"("value") ON UPDATE cascade ON DELETE cascade);
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
CREATE TRIGGER "set_public_user_active_cards_updated_at"
BEFORE UPDATE ON "public"."user_active_cards"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_active_cards_updated_at" ON "public"."user_active_cards" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
