package com.orange.gerenciadoralunos.DTO;

import org.springframework.data.domain.Page;

import com.orange.gerenciadoralunos.entity.Aluno;

public class AlunoPageDTO {

	private Long id;

	private String nome;

	private String email;

	private Integer idade;
	
	

	public AlunoPageDTO( Aluno aluno) {
		this.id = aluno.getId();
		this.nome = aluno.getNome();
		this.email = aluno.getEmail();
		this.idade = aluno.getIdade();
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getEmail() {
		return email;
	}

	public Integer getIdade() {
		return idade;
	}

	public static Page<AlunoPageDTO> converter(Page<Aluno> aluno) {
		return aluno.map(AlunoPageDTO::new);
	}

}
