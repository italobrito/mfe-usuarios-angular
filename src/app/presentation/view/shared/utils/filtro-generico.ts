export function filtrarPorPropriedades<T>(items: T[], filters: Partial<Record<keyof T, any>>): T[] {
  return items.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === undefined || value === null || value === '') {
        return true;
      }
      return item[key as keyof T] === value;
    });
  });
}