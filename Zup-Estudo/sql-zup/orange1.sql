CREATE DATABASE db_orange;

USE db_orange;

CREATE TABLE IF NOT EXISTS tb_aluno(

	id BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    idade INT NOT NULL
);

INSERT INTO tb_aluno (nome, email, idade) VALUES ('WITER', 'WITER@ZUP.COM.BR', 30);
INSERT INTO tb_aluno (nome, email, idade) VALUES ('ALINE', 'ALINE@HOTMAIL.COM.BR', 19);
INSERT INTO tb_aluno (nome, email, idade) VALUES ('EDU', 'EDU@ZUP.COM.BR', 50);
INSERT INTO tb_aluno (nome, email, idade) VALUES ('ANA', 'ANA@HOTMAIL.COM.BR', 22);
INSERT INTO tb_aluno (nome, email, idade) VALUES ('PATRICIA', 'PATRICIA@ZUP.COM.BR', 24);
INSERT INTO tb_aluno (nome, email, idade) VALUES ('RAFAEL', 'RAFAEL@ZUP.COM.BR', 40);

DELETE FROM tb_aluno WHERE email = 'WITER@ZUP.COM.BR';

SELECT * FROM tb_aluno;

SELECT * FROM tb_aluno WHERE email LIKE '%ZUP%';

SELECT * FROM tb_aluno ORDER BY idade ASC;

SELECT * FROM tb_aluno ORDER BY idade DESC;

