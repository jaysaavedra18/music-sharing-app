import api from '../../api'

// Function to fetch comments from the api.
export const getComments = async (postId) => {
  try {
    const res = await api.get(`/api/comments/post/${postId}/`);
    const data = res.data;
    const transformedData = data.map(comment => ({
      // serializer fields = ["id", "content", "created_at", "username", "userId", "parentId"]
      id: comment.id,
      body: comment.body,
      username: comment.username,
      userId: comment.userId,
      parentId: comment.parentId || null,
      createdAt: comment.createdAt,
      postId: comment.postId,
    }));
    return transformedData;
  } catch (error) {
    alert(error);
  }
};

// Function to delete comment by its id.
export const deleteComment = async (id) => {
  return api
    .delete(`/api/comments/delete/${id}/`)
    .then((res) => {
      if (res.status === 204) {
        // alert("Comment deleted!");
        return {};
      }
      else alert("Failed to delete comment.");
      // getComments(); // Refresh comments after deletion
    })
    .catch((error) => alert(error));
};

// Function to create a new comment
export const createComment = async (content, parentId = null, postId) => {
  const body = content
  return api
    .post("/api/comments/", { body, parentId, postId })
    .then((res) => {
      if (res.status === 201) {
        // alert("Comment created!");
        const newComment = res.data;
        return {
          id: newComment.id,
          body: newComment.body,
          parentId: newComment.parentId || null,
          userId: newComment.userId,
          username: newComment.username,
          createdAt: newComment.createdAt,
          postId: newComment.postId
        }
      }
      else alert("Failed to make comment.");
      getComments();
    })
    .catch((error) => alert(error));
};


export const updateComment = async (text, commentId) => {
  return api
    .put(`/api/comments/update/${commentId}/`, { body: text })
    .then((res) => {
      if (res.status === 200) {
        // alert("Comment updated!");
        return text
      } else {
        throw new Error("Failed to update comment.");
      }
    })
    .catch((error) => {
      alert(error.message);
      throw error;
    });
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

