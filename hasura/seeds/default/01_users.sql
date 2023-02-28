INSERT INTO "users" ("name")
VALUES
  ('testUser1'),
  ('testUser2'),
  ('testUser3')
ON CONFLICT (id)
DO UPDATE SET
  "id" = EXCLUDED.id,
  "name" = EXCLUDED.name
;
