package com.orange.gerenciadoralunos.DTO;

import com.orange.gerenciadoralunos.entity.Aluno;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class AlunoDTO {

    @Size(max = 30)
    @NotBlank
    private String nome;

    @Size(max = 30)
    @NotBlank
    @Email
        private String email;

    @NotNull
    private Integer idade;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public Aluno coverter() {
        return new Aluno(nome, email, idade);
    }

}
