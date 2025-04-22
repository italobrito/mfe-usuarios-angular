// import { Injectable } from '@angular/core';
// import { BaseHttpService } from './base-http.service';
// import { Usuario } from 'src/app/domain/entities/usuario';
// import { IUserRepository, USER_REPOSITORY_TOKEN } from 'src/app/domain/repositories/user-repository.interface';

// @Injectable({
//   providedIn: 'root',
//   useExisting: USER_REPOSITORY_TOKEN
// })
// export class UserService extends BaseHttpService implements IUserRepository {
//   private readonly baseUrl = '/api/usuarios';

//   createUser(usuario: Usuario): Promise<Usuario> {
//     return this.post<Usuario>(`${this.baseUrl}`, usuario);
//   }

//   updateUser(usuario: Usuario): Promise<Usuario> {
//     return this.put<Usuario>(`${this.baseUrl}/${usuario.id}`, usuario);
//   }

//   deleteUser(userId: number): Promise<void> {
//     return this.delete<void>(`${this.baseUrl}/${userId}`);
//   }

//   listUsers(): Promise<Usuario[]> {
//     return this.get<Usuario[]>(`${this.baseUrl}`);
//   }
// }