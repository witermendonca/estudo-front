package com.orange.gerenciadoralunos.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.orange.gerenciadoralunos.entity.Aluno;

@Repository
public interface AlunoRepository  extends JpaRepository<Aluno, Long>{

	Page<Aluno> findByNome(String nome, Pageable page);
}
