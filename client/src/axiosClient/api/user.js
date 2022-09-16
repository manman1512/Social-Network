import axiosClient from ".."

export const userApi ={
    getMe: async ()=>{
        // return User;
        try{
            const response = await axiosClient("/users/getMe");
            return response.data.User;
        }catch(error){
            throw new Error (error);
        }
        
    }
}