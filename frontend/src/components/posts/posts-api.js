import api from "../../api";

// Function to create a new comment
export const createPost = async (text) => {
    const link = text
    return api
        .post("/api/posts/", { link })
        .then((res) => {
            if (res.status === 201) {
                // alert("Comment created!");
                const newPost = res.data;
                // console.log(newPost);
                return {

                }
            }
            else alert("Failed to make comment.");
            getComments();
        })
        .catch((error) => alert(error));
};

export const getPosts = async () => {
    try {
        const res = await api.get("/api/posts/");
        const data = res.data;
        // console.log('post-data', data);
        return data;
    } catch (error) {
        alert(error);
    }
};
