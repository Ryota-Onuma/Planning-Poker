INSERT INTO "rooms" ("name")
VALUES
  ('room1'),
  ('room2'),
  ('room3')
ON CONFLICT (id)
DO UPDATE SET
  "id" = EXCLUDED.id,
  "name" = EXCLUDED.name
;
