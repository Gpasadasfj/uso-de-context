import { useUser } from "../context/useUser";
import { useSettings } from "../context/useSettings";

export default function LogguedUsers() {
  const users = useUser();
  const { language } = useSettings();

  return (
    <>
      <h2>{language === "es" ? "Usuarios" : "Users"}</h2>
      {users.users.map((e) => (
        <div key={e.id}>
          <h2>{language === "es" ? "Nombre: " : "Name: "}{e.name}</h2>
          <p>{language === "es" ? "Estado" : "State"} {e.logged === true ? "Online" : "Offline"}</p>
          <button onClick={() => users.toggleLog(e.id)}>{language === "es" ? "Cambiar estado" : "Change state"}</button>
        </div>
      ))}
    </>
  );
}
