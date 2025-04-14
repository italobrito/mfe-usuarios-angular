import { BaseEntity } from './base-entity';

export enum UserPermissions {
  admin = 'ADMIN',
  common = 'COMMON',
}

export interface UserEntity extends BaseEntity {
  name: string;
  permission: UserPermissions;
}
