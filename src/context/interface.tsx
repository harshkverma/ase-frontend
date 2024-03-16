import { EUserRole } from "../modules/avatarPopOverContent/interface";

export interface ContextProps {
  isSignedIn: boolean;
  setIsSignedIn: (newBalue: boolean) => void;
  email: string | null | undefined;
  setEmail: (value: string | null | undefined) => void;
  user: ILoginUser | undefined;
  setUser: (value: ILoginUser) => void;
  navigationAsPerSignedStatus: (requestedPage: string) => void;
  getAuthenticated: (userEmail: string) => boolean;
}

export interface DashboardContextProps {
  searchList: Array<DashboardSearchInterface>;
  setSearchList: (newList: Array<DashboardSearchInterface>) => void;
  getSearchListAsPerParam: (paramKey: string) => Array<any>;
  currentPageId: string | undefined | null;
  setCurrentPageId: (value: string | undefined | null) => void;
}

export interface DashboardSearchInterface {
  name: string;
  userId: string;
}

export interface IProfileContext {
  user: IUser | null | undefined;
  setUser: (user: IUser | null | undefined) => void;
}

export interface IUser {
  name: string;
  id: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface INotifyContext {}

export interface ISettingContext {}

export interface IAboutContext {}

export interface IContactContext {}

export interface ILoginUser {
  _id: string;
  name: string;
  profile_pic?: string;
  user_name: string;
  contact_number: string;
  email: string;
  role: EUserRole;
}