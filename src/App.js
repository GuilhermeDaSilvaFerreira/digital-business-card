import BusinessCard from "./components/BusinessCard";
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <BusinessCard emailOnly={false} lightMode={false} />
      <BusinessCard emailOnly={true} lightMode={false} />
      <BusinessCard emailOnly={false} lightMode={true} />
      <BusinessCard emailOnly={true} lightMode={true} />
    </div>
  );
}
