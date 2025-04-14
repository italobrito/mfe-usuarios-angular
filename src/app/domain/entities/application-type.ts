export enum ApplicationType {
  insert = 'insert',
  update = 'update',
  delete = 'delete',
  list = 'list',
}

export namespace ApplicationType {
  export function getApplicationTypeFromString(
    applicationTypeString: string
  ): ApplicationType {
    switch (applicationTypeString) {
      case ApplicationType.insert:
        return ApplicationType.insert;
      case ApplicationType.update:
        return ApplicationType.update;
      case ApplicationType.delete:
        return ApplicationType.delete;
      case ApplicationType.list:
        return ApplicationType.list;
      default:
        throw 'Aplicação não encontrada';
    }
  }
}
