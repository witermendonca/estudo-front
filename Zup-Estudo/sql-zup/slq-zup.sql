CREATE TABLE IF NOT EXISTS tb_avalicoes(
	id BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_av_cognitive (
	id BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    resposta VARCHAR(500)  NOT NULL,
    id_aluno BIGINT NOT NULL,
    id_avaliacao BIGINT NOT NULL,
    
	FOREIGN KEY(id_aluno) REFERENCES tb_aluno(id),
    FOREIGN KEY(id_avaliacao) REFERENCES tb_avalicoes(id)
);

CREATE TABLE IF NOT EXISTS tb_av_pessoal(
	id BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    pontuacao_auto_av INT NOT NULL,
    id_av_cognitive BIGINT NOT NULL,
    
    FOREIGN KEY(id_av_cognitive) REFERENCES tb_av_cognitive(id)
);

insert into tb_avalicoes (titulo, descricao) values ("Sql", 'Avaliação sobre sql');
insert into tb_avalicoes (titulo, descricao) values ("JPA", 'Avaliação sobre JPA');

insert into tb_av_cognitive (resposta, id_aluno, id_avaliacao) values ("gagasgsaghg", 2, 1);
insert into tb_av_cognitive (resposta, id_aluno, id_avaliacao) values ("gagasgsaghg", 3, 1);
insert into tb_av_cognitive (resposta, id_aluno, id_avaliacao) values ("gagasgsaghg", 4, 2);
insert into tb_av_cognitive (resposta, id_aluno, id_avaliacao) values ("gagasgsaghg", 6, 2);

insert into tb_av_pessoal (pontuacao_auto_av, id_av_cognitive) values (9, 1);
insert into tb_av_pessoal (pontuacao_auto_av, id_av_cognitive) values (5, 2);
insert into tb_av_pessoal (pontuacao_auto_av, id_av_cognitive) values (5, 3);
insert into tb_av_pessoal (pontuacao_auto_av, id_av_cognitive) values (9, 4);

select a.id, b.nome from tb_av_cognitive a inner join tb_aluno b on a.id_aluno = b.id;

select a.id, b.titulo from tb_av_cognitive a inner join tb_avalicoes b on a.id_avaliacao = b.id;

select a.id, b.nome, c.titulo from tb_av_cognitive a inner join tb_aluno b on a.id_aluno = b.id
inner join tb_avalicoes c on a.id_avaliacao = c.id;

SELECT b.nome, c.titulo FROM tb_av_cognitive a INNER JOIN tb_aluno b ON a.id_aluno = b.id
INNER JOIN tb_avalicoes c ON a.id_avaliacao = c.id;





