export default function Home() {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <header style={{ padding: 40, background: "#111", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: 48 }}>Dildo's Detailing</h1>
        <p>Premium auto detailing that makes your car shine like new</p>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, padding: 40 }}>
        <div style={{ border: "1px solid #ddd", padding: 20 }}>
          <h2>Exterior Detail</h2>
          <p>Deep wash, wax, and polish to restore shine.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: 20 }}>
          <h2>Interior Cleaning</h2>
          <p>Vacuuming, stain removal, and full interior refresh.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: 20 }}>
          <h2>Full Package</h2>
          <p>Complete inside & outside detailing service.</p>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: 20, background: "#111", color: "white" }}>
        © {new Date().getFullYear()} Dildo's Detailing
      </footer>
    </div>
  );
}
