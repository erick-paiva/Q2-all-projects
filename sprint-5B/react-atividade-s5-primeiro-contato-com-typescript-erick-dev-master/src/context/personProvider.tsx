import { createContext, useState, useContext, ReactNode } from "react";

interface ListProviderProps {
  children: ReactNode;
}

interface Person {
  name: string;
  email: string;
}

interface ListProviderData {
  list: Person[];
  newPerson: Person;
  createNewPerson: (person: Person) => void;
}

const ListContext = createContext<ListProviderData>({} as ListProviderData);

const useList = () => {
  const context = useContext(ListContext);

  return context;
};

const ListProvider = ({ children }: ListProviderProps) => {
  const [list, setList] = useState<Person[]>([]);
  const [newPerson, setNewPerson] = useState<Person>({} as Person);

  const createNewPerson = (person: Person) => {
    setList([...list, person]);
    setNewPerson(person);
  };

  return (
    <ListContext.Provider
      value={{
        createNewPerson,
        list,
        newPerson
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export { ListProvider, useList };
