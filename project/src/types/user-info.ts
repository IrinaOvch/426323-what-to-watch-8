export type UserInfo = {
  id: number;
  email: string;
  name: string;
  avatarUrl?: string;
}

export type UserInfoFromServer = {
  'avatar_url'?: string
  'id': number;
  'email': string;
  'name': string;
  'token': string;
}
