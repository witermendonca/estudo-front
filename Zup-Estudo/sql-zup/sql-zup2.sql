SELECT * FROM db_orange.tb_av_cognitive;

select count(a.resposta) as 'Quantidade', b.titulo  from tb_av_cognitive a inner join tb_avalicoes b on a.id_avaliacao = b.id;

select count(resposta) as 'quantidade' from tb_av_cognitive where id_avaliacao = 2;

SELECT a.titulo , COUNT(*) AS 'QTD_Respotas' FROM tb_avalicoes a INNER JOIN tb_av_cognitive b ON a.id = b.id_avaliacao GROUP BY a.titulo;


