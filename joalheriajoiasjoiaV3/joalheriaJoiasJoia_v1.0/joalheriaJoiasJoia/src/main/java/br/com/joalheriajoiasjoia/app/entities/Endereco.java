package br.com.joalheriajoiasjoia.app.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_endereco")
public class Endereco {

	// Atributos

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_endereco", nullable = false)
	private Long id_endereco;

	@Column(name = "cep", nullable = false, length = 100)
	private String cep;

	@Column(name = "rua", nullable = false, length = 100)
	private String rua;

	@Column(name = "numCasa", nullable = false, length = 100)
	private String numCasa;

	@Column(name = "cid", nullable = false, length = 100)
	private String cid;

	@Column(name = "estado", nullable = false, length = 100)
	private String estado;

	@Column(name = "comp", nullable = false, length = 100)
	private String comp;

	@Column(name = "bairro", nullable = false, length = 100)
	private String bairro;

	// Construtores

	public Endereco() {

	}

	public Endereco(Long id_endereco, String cep, String rua, String numCasa, String cid, String estado, String comp,
			String bairro) {
		this.id_endereco = id_endereco;
		this.cep = cep;
		this.rua = rua;
		this.numCasa = numCasa;
		this.cid = cid;
		this.estado = estado;
		this.comp = comp;
		this.bairro = bairro;
	}

	// Get e Set

	public Long getId_endereco() {
		return id_endereco;
	}

	public void setId_endereco(Long id_endereco) {
		this.id_endereco = id_endereco;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getNumCasa() {
		return numCasa;
	}

	public void setNumCasa(String numCasa) {
		this.numCasa = numCasa;
	}

	public String getCid() {
		return cid;
	}

	public void setCid(String cid) {
		this.cid = cid;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getComp() {
		return comp;
	}

	public void setComp(String comp) {
		this.comp = comp;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

}
