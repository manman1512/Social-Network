import axiosClient from ".."

const categoriesApi = {
    getByName: async (name)=>{
        return await axiosClient.get(`/categories`, {params: {
            q: name
        }})
    }
}
export default categoriesApi