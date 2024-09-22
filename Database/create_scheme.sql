-- cria o banco
CREATE DATABASE forum_db;

-- conecta ao banco
\c forum_db;

-- criação das tabelas
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    -- aqui é pra ele verificar se o tipo de usuário que tá tentando adicionar é válido
    user_type VARCHAR(50) CHECK (user_type IN ('normal', 'medico', 'agente_endemias', 'admin')) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    parent_post_id INT REFERENCES posts(id) ON DELETE CASCADE, -- deleta os posts filhos ao apagar
    date_published TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- deleta os posts se o user for apagado
);