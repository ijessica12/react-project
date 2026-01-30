import Header from './components/header.jsx'
import Entry from './components/entry.jsx'
export default function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Entry image="./src/assets/japan.jpeg" marker="./src/assets/mark.svg" country="Japan" title="Mount Fuji" dates="12 Jan, 2023 - 24 Jan, 2023" text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists." />
        <Entry image="./src/assets/australia.jpeg" marker="./src/assets/mark.svg" country="Australia" title="Sydney Opera House" dates="27 May, 2023 - 8 Jun, 2023" text="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings." />
        <Entry image="./src/assets/norway.jpeg" marker="./src/assets/mark.svg" country="Norway" title="Geirangerfjord" dates="01 Oct, 2024 - 18 Nov, 2024" text="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality." />
      </main>
    </>
  )
}
