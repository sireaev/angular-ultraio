export function clean(data: any): any {
  for (let obj in data) {
    if (!data[obj]) delete data[obj];
  }

  return data;
}
