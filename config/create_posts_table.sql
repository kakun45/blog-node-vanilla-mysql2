create DATABASE < DB_NAME >;

use < DB_NAME >;

create table `posts` (
`id`int NOT NULL auto_increment,
`title` varchar(100) not null,
`body` text not null,
`created_at` date not null,
    PRIMARY KEY (`id`)
);

-- tested, worked. Now endpoints do the job
-- insert into `posts`(
-- `title`,
-- `body`,
-- `created_at`
-- )
-- values 
-- ("Post 5", "This is the body of post 5", "2024-02-20"),
-- ("Post 4", "This is the body of post 4", "2024-02-19"),
-- ("Post 3", "This is the body of post 3", "2024-02-19"),
-- ("Post 2", "This is the body of post 2", "2024-02-19");

-- select * from posts;