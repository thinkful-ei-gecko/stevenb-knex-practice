INSERT INTO blogful_articles (title, date_published, content)
VALUES
    ('Big Spiders!',                     now() - '21 days'::INTERVAL,             'Look at these huge spiders'),
    ('Hurricane Imelda',                 now() - '21 days'::INTERVAL,             'The destruction of hurrican Imelda'),
    ('Cute Puppies',                     now() - '21 days'::INTERVAL,             'Super cute puupies'),
    ('Best Gambling Games',              now() - '20 days'::INTERVAL,             'Texas Hold em and Poker'),
    ('Best Video Games of 2019',         now() - '19 days'::INTERVAL,             'All dem gameessss'),
    ('Best Movies of 2019',              now() - '16 days'::INTERVAL,             'All dem moviessss'),
    ('Cute or Not?',                     now() - '16 days'::INTERVAL,             'Is that cute?'),
    ('British Monarchy',                 now() - '14 days'::INTERVAL,             'Who caresssss'),
    ('Guns guns guns',                   now() - '14 days'::INTERVAL,             'Oh heck yeah, guns!'),
    ('The Best Developer Jobs',          now() - '14 days'::INTERVAL,             'Probably full stack'),
    ('Best Tech Companies',              now() - '12 days'::INTERVAL,             'Probably Google, Facebook, etc...'),
    ('New Ford Trucks',                  now() - '9 days'::INTERVAL,              'Ooooh that new F250 though'),
    ('Astros Win World Series',          now() - '8 days'::INTERVAL,              'Go Astros!'),
    ('Texans Win Super Bowl',            now() - '8 days'::INTERVAL,              'Go Texans!'),
    ('Best Places to Visit in Texas',    now() - '6 days'::INTERVAL,              'Definitely Wimberely'),
    ('Diet 101',                         now() - '5 days'::INTERVAL,              'Spinach, horrible tasting food, kale probably'),
    ('Happy Marriage',                   now() - '5 days'::INTERVAL,              'Overuse I love you'),
    ('9th Gen Intel',                    now() - '3 days'::INTERVAL,              'Super sweet, but expensive'),
    ('Camping Spots in Texas',           now(),                                   'North of Houston'),
    ('Best Dog Breeds',                  now(),                                   'German Shepherd, Belgian Malinois, and Border Collie, duh')
;