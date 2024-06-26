import createApiClient from "./api.service";
class ProductService {
    constructor(baseUrl = "http://localhost:8080/products") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get()).data;
    }
    async create(data) {
        return (await this.api.post(data)).data;
    }
    async deleteAll() {
        return (await this.api.delete()).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async getAllDetails(productId) {
        return (await this.api.get(`/${productId}/details`)).data;
    }
    async getDetail(productId, id) {
        return (await this.api.get(`/${productId}/details/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    async findProductsByTypes(types) {
        return (await this.api.get("/filtered/type")).data;
    }
}
export default new ProductService();