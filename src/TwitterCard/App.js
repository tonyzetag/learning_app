import "./App.css";
import TwitterCard from "./TwitterCard";

export default function App() {
  return (
    <section className="md-twitter-follow-card-container">
      <TwitterCard name="Miguel Ángel Durán" username="midudev" />
      <TwitterCard name="Cristina" username="cristinafsanz" />
      <TwitterCard name="Marian Villa" username="marianvilla" />
      <TwitterCard name="Jose Antonio Zúñiga" username="tonyzetag" />
    </section>
  );
}
