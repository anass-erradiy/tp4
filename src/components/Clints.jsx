const Clinet = (props) => {
  return (
    <div>
      Nom : {props.user.nom} <br />
      Prenom : {props.user.prenom} <br />
      Age : {props.user.age} <br />
    </div>
  );
};
export default Clinet;
