import Header from './components/header.jsx'
import Entry from './components/entry.jsx'
import plan from './components/plan.js'
export default function App() {
  const entries = plan.map(item => {
    return (
      <Entry
        key={item.id}
        img={item.img}
        country={item.country}
        googleMapsLink={item.googleMapsLink}
        title={item.title}
        dates={item.dates}
        text={item.text}
      />
    )
  })
  return (
    <>
      <Header />
      <main>
        {entries}
      </main>
    </>
  )
}
