const API_ORIGIN = (
    import.meta.env.VITE_API_URL || "http://localhost:8000"
).replace(/\/$/, "");
const BASE_URL = `${API_ORIGIN}/api`;

export const getAuthPublicConfig = async () => {
    const res = await fetch(`${BASE_URL}/auth/public-config`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to load config");
    return data;
};

const getHeaders = (isFormData = false) => {
    const headers = {};
    const token = localStorage.getItem("token");
    if (token) headers["Authorization"] = `Bearer ${token}`;
    if (!isFormData) headers["Content-Type"] = "application/json";
    return headers;
};

// AUTH

export const loginUser = async (email, password) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Login failed");
    return data;
};

export const registerUser = async (name, email, password) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Registration failed");
    return data;
};

export const getMe = async () => {
    const res = await fetch(`${BASE_URL}/auth/me`, {
        headers: getHeaders()
    });
    if (res.status === 401) {
        localStorage.removeItem("token");
        window.location.href = '/login'
        return;
    }
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch user");
    return data;
};

export const forgotPassword = async (email) => {
    const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ email })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to send reset link");
    return data;
};

export const resetPassword = async (token, password) => {
    const res = await fetch(`${BASE_URL}/auth/reset-password`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ token, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to reset password");
    return data;
};

// LISTINGS

export const getListings = async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    const res = await fetch(`${BASE_URL}/listings?${params}`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch listings");
    return data;
};

export const getListing = async (id) => {
    const res = await fetch(`${BASE_URL}/listings/${id}`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch listing");
    return data;
};

export const createListing = async (formData) => {
    const res = await fetch(`${BASE_URL}/listings`, {
        method: "POST",
        headers: getHeaders(true),
        body: formData
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to create listing");
    return data;
};

export const updateListing = async (id, formData) => {
    const res = await fetch(`${BASE_URL}/listings/${id}`, {
        method: "PUT",
        headers: getHeaders(true),
        body: formData
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to update listing");
    return data;
};

export const deleteListing = async (id) => {
    const res = await fetch(`${BASE_URL}/listings/${id}`, {
        method: "DELETE",
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to delete listing");
    return data;
};

// CATEGORIES

export const getCategories = async () => {
    const res = await fetch(`${BASE_URL}/categories`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch categories");
    return data;
};

export const createCategory = async (body) => {
    const res = await fetch(`${BASE_URL}/categories`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to create category");
    return data;
};

export const updateCategory = async (id, body) => {
    const res = await fetch(`${BASE_URL}/categories/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to update category");
    return data;
};

export const deleteCategory = async (id) => {
    const res = await fetch(`${BASE_URL}/categories/${id}`, {
        method: "DELETE",
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to delete category");
    return data;
};

// LOST & FOUND

export const getLostFoundPosts = async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    const res = await fetch(`${BASE_URL}/lostfound?${params}`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch posts");
    return data;
};

export const getLostFoundPost = async (id) => {
    const res = await fetch(`${BASE_URL}/lostfound/${id}`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch post");
    return data;
};

export const createLostFoundPost = async (formData) => {
    const res = await fetch(`${BASE_URL}/lostfound`, {
        method: "POST",
        headers: getHeaders(true),
        body: formData
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to create post");
    return data;
};

export const updateLostFoundPost = async (id, body) => {
    const res = await fetch(`${BASE_URL}/lostfound/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to update post");
    return data;
};

export const deleteLostFoundPost = async (id) => {
    const res = await fetch(`${BASE_URL}/lostfound/${id}`, {
        method: "DELETE",
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to delete post");
    return data;
};

// MESSAGES

export const getConversations = async () => {
    const res = await fetch(`${BASE_URL}/messages/conversations`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch conversations");
    return data;
};

export const getMessages = async (partnerId) => {
    const res = await fetch(`${BASE_URL}/messages/${partnerId}`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch messages");
    return data;
};

export const sendMessage = async (receiverId, content) => {
    const res = await fetch(`${BASE_URL}/messages`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ receiverId, content })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to send message");
    return data;
};

export const deleteMessage = async (id) => {
    const res = await fetch(`${BASE_URL}/messages/${id}`, {
        method: "DELETE",
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to delete message");
    return data;
};

// TRANSACTIONS

export const getTransactions = async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    const res = await fetch(`${BASE_URL}/transactions?${params}`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch transactions");
    return data;
};

export const getTransaction = async (id) => {
    const res = await fetch(`${BASE_URL}/transactions/${id}`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch transaction");
    return data;
};

export const createTransaction = async (listingId) => {
    const res = await fetch(`${BASE_URL}/transactions`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ listingId })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to create transaction");
    return data;
};

export const updateTransaction = async (id, status) => {
    const res = await fetch(`${BASE_URL}/transactions/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify({ status })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to update transaction");
    return data;
};

// SAVED LISTINGS

export const getSavedListings = async () => {
    const res = await fetch(`${BASE_URL}/saved`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch saved listings");
    return data;
};

export const saveListing = async (listingId) => {
    const res = await fetch(`${BASE_URL}/saved/${listingId}`, {
        method: "POST",
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to save listing");
    return data;
};

export const unsaveListing = async (listingId) => {
    const res = await fetch(`${BASE_URL}/saved/${listingId}`, {
        method: "DELETE",
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to unsave listing");
    return data;
};

// REPORTS

export const getReports = async () => {
    const res = await fetch(`${BASE_URL}/reports`, {
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch reports");
    return data;
};

export const createReport = async (body) => {
    const res = await fetch(`${BASE_URL}/reports`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to submit report");
    return data;
};

export const deleteReport = async (id) => {
    const res = await fetch(`${BASE_URL}/reports/${id}`, {
        method: "DELETE",
        headers: getHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to delete report");
    return data;
};

export const updateProfile = async (formData) => {
    const res = await fetch(`${BASE_URL}/auth/me`, {
        method: "PUT",
        headers: getHeaders(true),
        body: formData
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to update profile");
    return data;
};