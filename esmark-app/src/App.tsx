import logo from './assets/esmark-logo.svg'
import './App.css'
import Housefilter from './assets/components/Housefilter'

function App() {

  return (
    <>  

      <div className="flex flex-col">
        <div className="flex flex-row sticky top-0 z-10 bg-white/90 backdrop-blur-sm">
          <img src={logo} className="ml-3 lg:w-[114px] lg:h-[116px] lg:scale-[0.55]" width="134" height="136" alt="Esmark Logo" title="Esmark Sommerhusudlejning" />
          <h1>Esmark Sommerhusudlejning Test</h1>
        </div>

        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 pt-4 md:pt-10 lg:mx-0 lg:max-w-none md:grid-cols-2">

            <article className="w-full basis-full max-w-xl rounded-md bg-primary bg-linear-to-t from-[#519BCD] to-[#166dba] p-8">
              <div className="group relative grow text-left">
                <h2 className="mt-3">
                  Opgave 1: Analyseopgave
                </h2>
                <p className="mt-5 line-clamp-3 text-sm/6">
                  Besøg siden https://esmark.de/jahreszeit/sommer/ og gennemgå den ud fra et frontend perspektiv. Send os en kort skriftlig tilbagemelding med følgende:
                </p>

                <ol className="list-decimal text-sm/6 mt-8 pl-4">
                  <li>Tre observationer omkring performance / indlæsningshastighed, gerne med 
                  dokumentation fra relevante værktøjer.</li>
                  <li>Tre forslag til forbedringer set fra et frontend- eller UX-perspektiv.</li>
                  <li>Ét teknisk SEO-problem, du identificerer på siden.</li>
                  <li>En kort beskrivelse af, hvilke værktøjer du brugte i din analyse.</li>
                </ol>
              </div>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between rounded-md bg-secondary bg-linear-to-t from-[#f7b259] to-[#f18700] p-8 mt-8 md:mt-0">
              <div className="group relative grow text-left">
                <h2 className="mt-3">
                  Opgave 2: Kodeopgave 
                </h2>
                <p className="mt-5 text-sm/6">
                  Byg en genanvendelig “sommerhuscard” (listevisning)-komponent, som den kunne vises på 
                  en kategoriside (fx https://esmark.de/blaavand/ ). Datasættet med 15 sommerhuse finder du i 
                  den vedhæftede fil.
                </p>

                <ul className="list-disc text-sm/6 pl-4 mt-8">
                  <li>Framework er frit valg. Begrund kort dit valg.</li>
                  <li>Responsivt design (mobile first).</li>
                  <li>SEO-venligt</li>
                  <li>Vis kun de huse der opfylder kriterierne i listevisningen: min. 6 personer, hund tilladt.</li>
                  <li>Semantisk og tilgængelig HTML (alt-tekster, korrekt heading-struktur, mulighed for tastaturnavigation).</li>
                  <li>Indlæs datasættet fra den vedhæftede fil “sommerhuse.json” som en lokal fil eller konstant i projektet.</li>
                </ul>
                
              </div>
            </article>

          </div>

          <div id="list" className="mt-10">
            <Housefilter />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
