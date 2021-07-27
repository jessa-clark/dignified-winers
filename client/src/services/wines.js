import api from "./apiConfig";

export const getWines = async () => {
  try {
    const res = await api.get("/wines");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getOneWine = async (id) => {
  try {
    const res = await api.get(`/wines/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const addWine = async (wine) => {
  try {
    const res = await api.post("/wines", wine);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editWine = async (id, wine) => {
  try {
    const res = await api.put(`/wines/${id}`, wine);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteWine = async (id) => {
  try {
    const res = await api.delete(`/wines/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// export const addReview = async (id, wine) => {
//   try {
//     const res= await api.put(`/wines/${id}`);
//     return 
//   }
// }