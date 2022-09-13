create schema blog;

create table blog.post (
    id serial primary key,
    title tex not null,
    content text not null,
    date timestamp default now()
);