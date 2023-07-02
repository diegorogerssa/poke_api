DROP DATABASE IF EXISTS poke_db;
CREATE DATABASE poke_db DEFAULT CHARACTER SET = 'utf8mb4';
USE poke_db;
CREATE TABLE generation(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    generation INT NOT NULL,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE user(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    pokeballs INT NOT NULL,
    id_generation INT NOT NULL,
    FOREIGN KEY (id_generation) REFERENCES generation(id)
);
CREATE TABLE pokemon(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_pokemon VARCHAR(255) NOT NULL,
    name_pokemon VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
);
CREATE TABLE user_pokemon(
    user_id INT NOT NULL,
    pokemon_id INT NOT NULL,
    PRIMARY KEY(user_id, pokemon_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id)
);
INSERT INTO generation(generation, name)
    VALUES(1, '1º geração'),
          (2, '2° geração'),
          (3, '3° geração'),
          (4, '4° geração'),
          (5, '5° geração'),
          (6, '6° geração'),
          (7, '7° geração'),
          (8, '8° geração');
-- INSERT INTO user(name, email, pokeballs, id_generation)
--     VALUES('Diego', 'diego@email.com', 100, 1),
--           ('Miriam', 'miriam@email.com', 100, 1);
-- INSERT INTO pokemon(id_pokemon, name_pokemon, image)
--     VALUES(70, 'weepinbell', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png');
-- INSERT INTO user_pokemon(user_id, pokemon_id)
--     VALUES(2, 1);
