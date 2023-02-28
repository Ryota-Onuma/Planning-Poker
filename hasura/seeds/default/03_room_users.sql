INSERT INTO "room_users" ("user_id", "room_id")
VALUES
  ((SELECT id FROM "users" WHERE "users".name = 'testUser1' LIMIT 1),(SELECT id FROM "rooms" WHERE "rooms".name = 'room1' LIMIT 1)),
  ((SELECT id FROM "users" WHERE "users".name = 'testUser2' LIMIT 1),(SELECT id FROM "rooms" WHERE "rooms".name = 'room1' LIMIT 1)),
  ((SELECT id FROM "users" WHERE "users".name = 'testUser3' LIMIT 1),(SELECT id FROM "rooms" WHERE "rooms".name = 'room1' LIMIT 1))
ON CONFLICT (id)
DO UPDATE SET
  "id" = EXCLUDED.id,
  "user_id" = EXCLUDED.user_id,
  "room_id" = EXCLUDED.room_id
;

INSERT INTO "room_users" ("user_id", "room_id")
VALUES
  ((SELECT id FROM "users" WHERE "users".name = 'testUser1' LIMIT 1),(SELECT id FROM "rooms" WHERE "rooms".name = 'room2' LIMIT 1)),
  ((SELECT id FROM "users" WHERE "users".name = 'testUser2' LIMIT 1),(SELECT id FROM "rooms" WHERE "rooms".name = 'room2' LIMIT 1)),
  ((SELECT id FROM "users" WHERE "users".name = 'testUser3' LIMIT 1),(SELECT id FROM "rooms" WHERE "rooms".name = 'room2' LIMIT 1))
ON CONFLICT (id)
DO UPDATE SET
  "id" = EXCLUDED.id,
  "user_id" = EXCLUDED.user_id,
  "room_id" = EXCLUDED.room_id
;

INSERT INTO "room_users" ("user_id", "room_id")
VALUES
  ((SELECT id FROM "users" WHERE "users".name = 'testUser1' LIMIT 1),(SELECT id FROM "rooms" WHERE "rooms".name = 'room3' LIMIT 1)),
  ((SELECT id FROM "users" WHERE "users".name = 'testUser2' LIMIT 1),(SELECT id FROM "rooms" WHERE "rooms".name = 'room3' LIMIT 1)),
  ((SELECT id FROM "users" WHERE "users".name = 'testUser3' LIMIT 1),(SELECT id FROM "rooms" WHERE "rooms".name = 'room3' LIMIT 1))
ON CONFLICT (id)
DO UPDATE SET
  "id" = EXCLUDED.id,
  "user_id" = EXCLUDED.user_id,
  "room_id" = EXCLUDED.room_id
;

