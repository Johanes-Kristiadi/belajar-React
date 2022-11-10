function ProductComponent(props) {
  return (
    <div className="Product">
      <img src="https://placekitten.com/100"></img>
      <h1>{props.judul}</h1>
      <p>
        {props.harga.toLocaleString("ID", {
          style: "currency",
          currency: "IDR",
        })}
      </p>
      <p>{props.kota}</p>
      <p></p>
    </div>
  );
}

export default ProductComponent;
