package com.orange.gerenciadoralunos.DTO;

import com.orange.gerenciadoralunos.entity.Aluno;

public class AlunoGetDTO {

	private String nome;

	private String email;

	public AlunoGetDTO(Aluno aluno) {
		this.nome = aluno.getNome();
		this.email = aluno.getEmail();
	}

	public String getNome() {
		return nome;
	}

	public String getEmail() {
		return email;
	}

}
