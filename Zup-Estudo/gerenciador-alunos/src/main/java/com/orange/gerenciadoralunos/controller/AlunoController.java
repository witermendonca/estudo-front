package com.orange.gerenciadoralunos.controller;

import java.net.URI;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.orange.gerenciadoralunos.DTO.AlunoDTO;
import com.orange.gerenciadoralunos.DTO.AlunoGetDTO;
import com.orange.gerenciadoralunos.DTO.AlunoPageDTO;
import com.orange.gerenciadoralunos.entity.Aluno;
import com.orange.gerenciadoralunos.repository.AlunoRepository;


@RestController
@RequestMapping("/aluno")
public class AlunoController {

	@Autowired
	private AlunoRepository alunoRepository;

	@PostMapping
	@Transactional
	public ResponseEntity<Aluno> cadastrar(@RequestBody @Valid AlunoDTO alunoDTO, UriComponentsBuilder uriBuilder) {

		Aluno aluno = alunoDTO.coverter();

		alunoRepository.save(aluno);

		URI uri = uriBuilder.path("/aluno/{id}").buildAndExpand(aluno.getId()).toUri();
		return ResponseEntity.created(uri).body(aluno);

		// return ResponseEntity.ok(aluno);
	}

	@GetMapping("/{id}")
	public ResponseEntity<AlunoGetDTO> getByID(@PathVariable Long id) {

		Optional<Aluno> aluno = alunoRepository.findById(id);
		if (aluno.isPresent()) {
			return ResponseEntity.ok(new AlunoGetDTO(aluno.get()));
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping
	public Page<AlunoPageDTO> getAll( Pageable page){
		
		Page<Aluno> aluno = alunoRepository.findAll(page);
		return AlunoPageDTO.converter(aluno);
		
//		if (alunoDTO == null) {
//			Page<Aluno> aluno = alunoRepository.findAll(page);
//			return AlunoPageDTO.converter(aluno);
//		} else {
//			Page<Aluno> aluno = alunoRepository.findByNome(alunoDTO, page);
//			return AlunoPageDTO.converter(aluno);
//		}
	}
}
