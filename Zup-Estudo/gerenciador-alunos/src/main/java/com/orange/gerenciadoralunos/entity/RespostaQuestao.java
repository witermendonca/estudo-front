package com.orange.gerenciadoralunos.entity;

public class RespostaQuestao {

	private Avaliacao avaliacao;

	private Aluno aluno;

	private int nota;

	
	public RespostaQuestao(Avaliacao avaliacao, Aluno aluno, int nota) {
		super();
		this.avaliacao = avaliacao;
		this.aluno = aluno;
		this.nota = nota;

		if (avaliacao == null) {

			throw new IllegalArgumentException("A avaliação não pode ser nula");

		}

		if (aluno == null) {

			throw new IllegalArgumentException("O aluno não pode ser nula");

		}

		if (nota < 0) {

			throw new IllegalArgumentException("A nota não pode ser menor que zero");

		}

		if (nota > 10) {

			throw new IllegalArgumentException("A nota não pode ser maior que10");

		}

	}

}
