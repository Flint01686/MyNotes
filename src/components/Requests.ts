import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { LoginI, RegisterI } from './Interfaces/Auth';

//Auth
const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem('accessToken');
  const resultConfig = config;
  if (token) resultConfig.headers.Authorization = `Bearer ${token}`;
  return resultConfig;
};

export const authReq = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

authReq.interceptors.request.use(authInterceptor, (error) => {
  Promise.reject(error).then();
});

export const signIn = (data: LoginI): Promise<AxiosResponse> => authReq.post('auth/login', data);
export const signUp = (data: RegisterI): Promise<AxiosResponse> => authReq.post('auth/register', data);

//Notes
export const notesReq = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'multipart/form-data' },
});

notesReq.interceptors.request.use(authInterceptor, (e) => {
  return Promise.reject(e);
});
notesReq.interceptors.response.use(res => res, (e) => {  
  // console.log("err", e);
  
  alert(e)
  localStorage.removeItem('accessToken')
  
  return Promise.reject(e);
});

export const getOneNoteById = (id: number): Promise<AxiosResponse> => notesReq.get(`note/${id}`);
export const getPageNotes = (page: number): Promise<AxiosResponse> => notesReq.get(`note/page/${page}`);
export const getPageNotesByFilter = 
  (page: number, filter: string): Promise<AxiosResponse> => notesReq.get(`note/pagef/${page}/${filter}`);
export const getPagesCountByFilter = 
  (filter: string): Promise<AxiosResponse> => notesReq.get(`note/pagec/${filter}`);
export const getPagesCount = (): Promise<AxiosResponse> => notesReq.get('note/pagecnt');
export const getPinnedNotes = (): Promise<AxiosResponse> => notesReq.get('note/pinned');
export const cloneOneNoteById = (id: number): Promise<AxiosResponse> => notesReq.post(`note/${id}`);
export const addNote = (data: FormData): Promise<AxiosResponse> => notesReq.post('note', data);
export const updateNote = (id: number, data: FormData): Promise<AxiosResponse> =>
  notesReq.put(`note/${id}`, data);
export const deleteNote = (id: number): Promise<AxiosResponse> => notesReq.delete(`note/${id}`);
