  export interface LoginI {
    login: string
    password: string
}

export interface RegisterI {
    login: string
    email: string
    password: string
}

export interface CreateNoteI {
  tags?: string[]
  files?: Array<File>
  text: string
}

export interface ResetPasswordI {
  token: string
  password: string
}

export interface SendEmailI {
  email: string
}

export interface GetAccessI {
  token: string
}