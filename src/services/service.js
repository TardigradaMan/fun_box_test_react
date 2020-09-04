export default class RestoService {
  _apiBase = 'http://localhost:3000';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw console.error(
        new Error(`Не удалось получить данные. Код ошибки: ${res.status}`)
      );
    }
    return await res.json();
  }

  async getlistCatFood() {
    return await this.getResource('/feeds/');
  }
}
