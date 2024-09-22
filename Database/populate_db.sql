-- script para popular o banco de dados com dados.
-- Ajudará para mostrar a aplicação funcionando e a fazer testes.

-- criar usuários
INSERT INTO users (email, password, display_name, user_type) VALUES
('usuario@example.com', 'senha123', 'User123', 'normal'),
('alexarr@example.com', 'senha456', 'Alessandro Arruda', 'medico'),
('patypaty@example.com', 'senha789', 'Patrícia Soares', 'agente_endemias'),
('elanene@example.com', 'senhaabc', 'Elane da silva mendes costas', 'normal'),
('ronaldinhoplay@example.com', 'senhaabc', 'Ronaldo Robalo', 'normal'),
('meunomeehlevi@example.com', 'hahaha', 'Levi Pedro', 'admin'),
('joaonasteicio@example.com', 'salksjdaksld', 'João Anastácio', 'admin');

-- criar posts
INSERT INTO posts (user_id, content) VALUES
(1, 'Acho que a dengue não existe!! O governo está injetando a dengue através das vacinas. Eu estou certo e todo mundo está errado!!'),
(2, 'Pessoal, cuidado pra não confundir os sintomas com Covid. Por incrível que pareça tinha um pessoal confundindo.'),
(4, 'Algum agente de endemias disponível? Tem um foco de dengue gigante aqui perto de casa.'),
(3, 'Pessoal, se forem sair de casa de férias por vários dias, cubram os ralos com uma sacola. Grata.'),
(5, 'Minha mãe está com sintomas parecidos com dengue, algum médico pra me ajudar?');

-- criar respostas aos posts
INSERT INTO posts (user_id, content, parent_post_id) VALUES
(2, 'Você está louca, querida.', 1),
(1, 'Você não vai me calar!!!', 6),
(2, 'Algum admin pra deletar o post desse cristão aqui?', 7),
(4, 'Pois não querida. Qual o endereço?', 3),
(2, 'Estou aqui. Quais sintomas você observou nela?', 5);