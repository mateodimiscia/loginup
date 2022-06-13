package com.utn.loginup.repositories;

import org.springframework.data.repository.CrudRepository;

import com.utn.loginup.models.Usuarios;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UsuariosRepository extends CrudRepository<Usuarios, Integer> {

}
