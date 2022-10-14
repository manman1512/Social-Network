import axiosClient from "..";

const postsApi = {
    cratePost: async (data) => {
        return await axiosClient.post("/posts", data);
    },
    getPost: async (data) => {
        return await axiosClient.get('/posts/getPostById/' + data);
    },
    updatePost: async (_id,data) => {
        return await axiosClient.patch('/posts/updatePostById/' + _id, data);
    },
    getPostByAuthor: async (author)=>{
        console.log(author)
        return await axiosClient.get("/posts/getPostsByAuthor", {params: {author}});
    }
}
export default postsApi;