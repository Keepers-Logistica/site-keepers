interface UserAttributes {
  firstname: string
  lastname: string
  username: string | null
  preferedLanguage: string | null
  createdAt: string
  updatedAt: string
}

interface UserData {
  id: number
  attributes: UserAttributes
}

export interface UserCms {
  data: UserData
}
