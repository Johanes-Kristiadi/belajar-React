import ListComponent from "./ListComponent";
import ProductComponent from "./ProductComponent";

function App() {
  const barang = ["Sendok", "garpu", "Piring"];
  const helo = "Hello dunia";
  const nama = ["Budi", "Andi", "Carlie"];
  const hewan = ["Kuda", "Merpati", "Gajah", "Pinguin", "Badak"];

  // ==================
  const DaftarProduct = [
    { judul: "Sepatu", harga: 5000, kota: "Surabaya" },
    { judul: "Baju", harga: 25000, kota: "Denpasar" },
    { judul: "Bunga", harga: 57000, kota: "Semarang" },
  ];
  return (
    <div className="App">
      {/* <ListComponent daftar={barang} judul="nama barang"></ListComponent>
      <ListComponent daftar={hewan} judul="nama hewan"></ListComponent> */}

      {DaftarProduct.map((item) => {})}
    </div>
  );
}

export default App;
