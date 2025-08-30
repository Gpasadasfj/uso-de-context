export interface UserProps {
  id: number;
  name: string;
  logged: boolean;
}

export interface UserContextProps {
    users: UserProps[];
    toggleLog: (id: number) => void;
}
