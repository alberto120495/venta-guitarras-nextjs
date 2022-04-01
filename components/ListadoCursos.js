import styles from "../styles/Cursos.module.css";
import Entrenamiento from "./Entrenamiento";

function ListadoCursos({ cursos }) {
  return (
    <>
      <h2 className="heading">Cursos</h2>
      <div className={styles.curso}>
        {cursos.map((curso) => (
          <Entrenamiento key={curso.id} curso={curso} />
        ))}
      </div>
    </>
  );
}

export default ListadoCursos;
