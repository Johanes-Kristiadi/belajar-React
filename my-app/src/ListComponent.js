function ListComponent(props) {
  return (
    <ol>
      <p>{props.judul}</p>
      {props.daftar.map((item) => {
        return <li>{item}</li>;
      })}
    </ol>
  );
}

export default ListComponent;
