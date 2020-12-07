export type AuthenticationData = {
  id: string
}

export type User = {
  id: string,
  name: string,
  email: string,
  nickname: string,
  password: string
}

export type Image = {
  id: string,
  subtitle: string,
  author: string,
  date: Date,
  file: string,
  tags: string,
  collection: string,
  userId: string
}

