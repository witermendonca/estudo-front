package com.orange.gerenciadoralunos.configValidacao;

public class ErroValidDto {

	private String campo;
	private String erro;
	
	
	
	public ErroValidDto(String campo, String erro) {
		this.campo = campo;
		this.erro = erro;
	}

	public String getCampo() {
		return campo;
	}

	public String getErro() {
		return erro;
	}
}
