import { BaseEntity } from './base-entity';

export interface Sector extends BaseEntity {
  value: string;
  viewValue: string;
}

export interface Sectors {
  uuid: string;
  name: string;
  icon: string;
  isOpen: string;
  options: Array<ItemSector>;
}

export interface ItemSector {
  uuid: string;
  name: string;
  icon: string;
  route: string;
}
