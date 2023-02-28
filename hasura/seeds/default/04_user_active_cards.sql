INSERT INTO "user_active_cards" ("room_user_id")
VALUES
  ((SELECT "id" FROM "room_users" WHERE "user_id" = (SELECT id FROM "users" WHERE "users".name = 'testUser1' LIMIT 1) AND "room_id" = (SELECT id FROM "rooms" WHERE "rooms".name = 'room1' LIMIT 1))),
  ((SELECT "id" FROM "room_users" WHERE "user_id" = (SELECT id FROM "users" WHERE "users".name = 'testUser2' LIMIT 1) AND "room_id" = (SELECT id FROM "rooms" WHERE "rooms".name = 'room1' LIMIT 1))),
  ((SELECT "id" FROM "room_users" WHERE "user_id" = (SELECT id FROM "users" WHERE "users".name = 'testUser3' LIMIT 1) AND "room_id" = (SELECT id FROM "rooms" WHERE "rooms".name = 'room1' LIMIT 1))),
  ((SELECT "id" FROM "room_users" WHERE "user_id" = (SELECT id FROM "users" WHERE "users".name = 'testUser1' LIMIT 1) AND "room_id" = (SELECT id FROM "rooms" WHERE "rooms".name = 'room2' LIMIT 1))),
  ((SELECT "id" FROM "room_users" WHERE "user_id" = (SELECT id FROM "users" WHERE "users".name = 'testUser2' LIMIT 1) AND "room_id" = (SELECT id FROM "rooms" WHERE "rooms".name = 'room2' LIMIT 1))),
  ((SELECT "id" FROM "room_users" WHERE "user_id" = (SELECT id FROM "users" WHERE "users".name = 'testUser3' LIMIT 1) AND "room_id" = (SELECT id FROM "rooms" WHERE "rooms".name = 'room2' LIMIT 1))),
  ((SELECT "id" FROM "room_users" WHERE "user_id" = (SELECT id FROM "users" WHERE "users".name = 'testUser1' LIMIT 1) AND "room_id" = (SELECT id FROM "rooms" WHERE "rooms".name = 'room3' LIMIT 1))),
  ((SELECT "id" FROM "room_users" WHERE "user_id" = (SELECT id FROM "users" WHERE "users".name = 'testUser2' LIMIT 1) AND "room_id" = (SELECT id FROM "rooms" WHERE "rooms".name = 'room3' LIMIT 1))),
  ((SELECT "id" FROM "room_users" WHERE "user_id" = (SELECT id FROM "users" WHERE "users".name = 'testUser3' LIMIT 1) AND "room_id" = (SELECT id FROM "rooms" WHERE "rooms".name = 'room3' LIMIT 1)))
ON CONFLICT (id)
DO UPDATE SET
  "id" = EXCLUDED.id,
  "room_user_id" = EXCLUDED.room_user_id
;

SELECT setval('user_active_cards_id_seq', (SELECT MAX(id) FROM user_active_cards));