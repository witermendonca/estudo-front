package com.orange.gerenciadoralunos;

import org.junit.Assert;
import org.junit.jupiter.api.Test;

import com.orange.gerenciadoralunos.entity.Aluno;
import com.orange.gerenciadoralunos.entity.Avaliacao;
import com.orange.gerenciadoralunos.entity.RespostaQuestao;

public class RespostaQuestaoTest {

	Aluno aluno = new Aluno("Witer", "witer@zup.com", 30);

	Avaliacao avaliacao = new Avaliacao("Spring", "tarastsr");

	@Test
	public void avaliacaoNaoExisteLancaIllegalArgumentException() {

		try {

			RespostaQuestao respostaQuestao = new RespostaQuestao(null, aluno, 10);

			Assert.fail();

		} catch (IllegalArgumentException e) {

		}

	}

	@Test()
	public void alunoNaoExisteLancaIllegalArgumentException() {

		try {

			RespostaQuestao respostaQuestao = new RespostaQuestao(avaliacao, null, 10);

			Assert.fail();

		} catch (IllegalArgumentException e) {

		}

	}

	@Test()
	public void notaMenorQueZeroLancaIllegalArgumentException() {

		try {
			RespostaQuestao respostaQuestao = new RespostaQuestao(avaliacao, aluno, -1);

			Assert.fail();

		} catch (IllegalArgumentException e) {

		}

	}

	@Test()
	public void notaMaiorQueDezLancaIllegalArgumentException() {

		try {
			RespostaQuestao respostaQuestao = new RespostaQuestao(avaliacao, aluno, 11);

			Assert.fail();

		} catch (IllegalArgumentException e) {

		}
	}

}
