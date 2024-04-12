import type { Review } from '@/components/profile/account-content/OrderCard.vue';
import axios from 'axios';

export type Address = {
    belongsTo: string,
    address: string,
    cityId: string,
    districtId: string,
    wardId: string,
    customer: User,
    isDefault: boolean,
}

export type User = {
    id: number,
    account: string,
    password: string,
    name: string,
    phone: string,
    email: string,
    avatar: string,
    dob: Date,
    roles: any,
    locked: boolean
}

export class UserService {
   
    constructor() {
    }

    public async postAddress(address: Address) {
        const baseUri = this.getBaseUri();
        return await axios.post(`${baseUri}`, address);
    }

    public async getAddressesByCustomerId(customerId) {
        const baseUri = this.getBaseUri();
        return (await axios.get(`${baseUri}/customer/${customerId}`));
    }

    async getCity() {

        const baseUri = this.getGHNUri();
        return (await axios.get(`${baseUri}/master-data/province`, {
            headers: {
                "Content-Type": "application/json",
                "Token": "726cd839-e9d8-11ee-b1d4-92b443b7a897",
                "ShopId": "191483"
            }
        }));

    }

    async getCityById(cityId) {

        const baseUri = this.getGHNUri();
        const cities = (await axios.get(`${baseUri}/master-data/province`, {
            headers: {
                "Content-Type": "application/json",
                "Token": "726cd839-e9d8-11ee-b1d4-92b443b7a897",
                "ShopId": "191483"
            }
        }));

        return cities.data.data.find(x => x.ProvinceID === cityId);

    }

    async getDistrict(cityId) {

        const baseUri = this.getGHNUri();
        return (await axios.get(`${baseUri}/master-data/district`, {
            headers: {
                "Content-Type": "application/json",
                "Token": "726cd839-e9d8-11ee-b1d4-92b443b7a897",
                "ShopId": "191483"
            },
            params: {
                "province_id": cityId,
            }
        }));

    }

    async getDistrictById(cityId, districtId) {

        const baseUri = this.getGHNUri();
        const districts = (await axios.get(`${baseUri}/master-data/district`, {
            headers: {
                "Content-Type": "application/json",
                "Token": "726cd839-e9d8-11ee-b1d4-92b443b7a897",
                "ShopId": "191483"
            },
            params: {
                "province_id": cityId,
            }
        }));

        return districts.data.data.find(x => x.DistrictID === districtId);
    }

    async getWard(districtId) {
        const baseUri = this.getGHNUri();
        return (await axios.get(`${baseUri}/master-data/ward`, {
            headers: {
                "Content-Type": "application/json",
                "Token": "726cd839-e9d8-11ee-b1d4-92b443b7a897",
                "ShopId": "191483"
            },
            params: {
                "district_id": districtId,
            }
        }));

    }

    async getWardById(districtId, wardId) {
        const baseUri = this.getGHNUri();
        const wards = (await axios.get(`${baseUri}/master-data/ward`, {
            headers: {
                "Content-Type": "application/json",
                "Token": "726cd839-e9d8-11ee-b1d4-92b443b7a897",
                "ShopId": "191483"
            },
            params: {
                "district_id": districtId,
            }
        }));

        return wards.data.data.find(x => x.WardCode === wardId);
    }

    public async updateImages(productId, reviewId, imageFiles) {
        const baseUri = this.getBaseUri();
        return await axios.put(`${baseUri}/products/${productId}/reviews/${reviewId}/upload`, imageFiles, 
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    getBaseUri() {
        return `${import.meta.env.VITE_BACKEND_BASE_URL}/addresses`;
    }

    getGHNUri() {
        return `https://dev-online-gateway.ghn.vn/shiip/public-api`;
    }

}

const userService = new UserService();
export const provideUserService = () => {
    return {
        userService,
    };
};