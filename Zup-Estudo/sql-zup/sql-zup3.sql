SELECT * FROM db_orange.tb_av_pessoal;



select a.id, b.nome, c.titulo from tb_av_cognitive a inner join tb_aluno b on a.id_aluno = b.id
inner join tb_avalicoes c on a.id_avaliacao = c.id;

/*	Precisamos da nota média da autocorreção por avaliação*/
SELECT b.titulo, AVG(c.pontuacao_auto_av) AS 'media' FROM tb_av_cognitive a INNER JOIN tb_avalicoes b ON a.id_avaliacao = b.id 
INNER JOIN tb_av_pessoal c ON a.id = c.id_av_cognitive GROUP BY b.titulo;