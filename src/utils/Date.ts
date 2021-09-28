export function getDate(pattern: string) : string{
  const newDate = new Date();
  return `${newDate.getDate() + pattern + (newDate.getMonth() + 1) + pattern + newDate.getFullYear()}`
}

export function getRevertDate(pattern: string) : string{
  const newDate = new Date();
  return `${newDate.getFullYear() + pattern + (newDate.getMonth() + 1) + pattern + newDate.getDate()}`
}

export function getMonth(): string{
  const newDate = new Date();
  return `${newDate.getMonth() + 1}`
}

export function getYear() : string{
  const newDate = new Date();
  return `${newDate.getFullYear()}`
}

export function getWeek() {
  return `${new Date().toLocaleString('pt-br', {weekday: 'long'})}`;
}