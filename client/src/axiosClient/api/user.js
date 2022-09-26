import axiosClient from ".."

export const userApi ={
    getMe: async ()=>{
        // return User;
        try{
            const response = await axiosClient.get("/users/getMe");
            return response.data.User;
        }catch(error){
            console.log(error);
            throw new Error (error);
        }
        
    }
}