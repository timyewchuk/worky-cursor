// API service to interact with the backend

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Helper function for making API requests
async function request<T>(
  endpoint: string, 
  method: string = 'GET', 
  data: any = null, 
  token: string | null = null
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const config: RequestInit = {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  };
  
  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json();
      return Promise.reject(errorData);
    }
    
    const responseData = await response.json();
    return responseData as T;
  } catch (error) {
    console.error('API request error:', error);
    return Promise.reject(error);
  }
}

// Auth related API calls
export const authAPI = {
  login: (email: string, password: string) => 
    request<{ token: string }>('/auth/login', 'POST', { email, password }),
  
  signup: (name: string, email: string, password: string) => 
    request<{ token: string }>('/auth/signup', 'POST', { name, email, password }),
  
  googleLogin: (token: string) => 
    request<{ token: string }>('/auth/google', 'POST', { token }),
  
  getCurrentUser: (token: string) => 
    request('/auth/me', 'GET', null, token),
};

// Tasks related API calls
export const tasksAPI = {
  getAllTasks: (token: string) => 
    request('/tasks', 'GET', null, token),
  
  getTask: (id: string, token: string) => 
    request(`/tasks/${id}`, 'GET', null, token),
  
  createTask: (taskData: any, token: string) => 
    request('/tasks', 'POST', taskData, token),
  
  updateTask: (id: string, taskData: any, token: string) => 
    request(`/tasks/${id}`, 'PUT', taskData, token),
  
  deleteTask: (id: string, token: string) => 
    request(`/tasks/${id}`, 'DELETE', null, token),
};

// Scorecards related API calls
export const scorecardsAPI = {
  getAllMetrics: (token: string) => 
    request('/scorecards', 'GET', null, token),
  
  // More methods to be implemented
};

// Playbooks related API calls
export const playbooksAPI = {
  getAllPlaybooks: (token: string) => 
    request('/playbooks', 'GET', null, token),
  
  // More methods to be implemented
};

// People related API calls
export const peopleAPI = {
  getAllTeamMembers: (token: string) => 
    request('/people', 'GET', null, token),
  
  // More methods to be implemented
};

export default {
  auth: authAPI,
  tasks: tasksAPI,
  scorecards: scorecardsAPI,
  playbooks: playbooksAPI,
  people: peopleAPI,
}; 