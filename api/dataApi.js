import { api } from "./api";

async function getUsers() {
    try {
        const response = await api.get("?results=100");
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
}

export { getUsers };