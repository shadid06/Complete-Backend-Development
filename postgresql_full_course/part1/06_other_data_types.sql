
DROP TABLE IF EXISTS basics.app_events;


CREATE TABLE basics.app_events (-- uuid--
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                             event_name TEXT NOT NULL, --jsonb
 metadata JSONB DEFAULT '{}'::jsonb,
                        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW());


SELECT *
FROM basics.app_events;

--insert some data

INSERT INTO basics.app_events (event_name, metadata) -- VALUES ('user_login', '{}'::jsonb);

VALUES ('device_info', '{"os": "linux", "browser": "chrome"}'::jsonb);

--query---

SELECT event_name,
       metadata->>'os' as operating_system,
       metadata->>'browser' as browser
FROM basics.app_events
WHERE event_name = 'device_info';