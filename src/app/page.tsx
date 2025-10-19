import * as Components from './components/index';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="pb-8 text-4xl font-bold">Component Tests:</h1>

        <h2 className="sticky top-0 z-10 -translate-x-[200px] transform pb-4 text-2xl font-semibold">
          Feedback Components:
        </h2>
        <section>
          <section>
            <p>Alert:</p>
            <Components.Alert />
          </section>

          <section>
            <p>Badge:</p>
            <Components.Badge text={"Extrem"} /> <Components.Badge text={"coole"} color='red' /> <Components.Badge text={"Badges"} color='green' />
          </section>

          <section>
            <p>Progressbar:</p>
            <Components.ProgressBar value={60} />
          </section>

          <section>
            <p>Toast:</p>
            <Components.Toast text="Toast text"/>
          </section>
        </section>

        <h2 className="sticky top-0 z-10 -translate-x-[200px] transform pb-4 text-2xl font-semibold">
          UI-Content Components:
        </h2>
        <section>
          <section>
            <p>Card:</p>
            <Components.Card
              header={{
                title: 'Sample Card',
              }}
              body={{
                description: 'This is a sample card description.',
              }}
            />
          </section>

          <section>
            <p>List:</p>
            <Components.List />
          </section>

          <section>
            <p>Textarea:</p>
            <Components.Textarea text="text" label="label"/>
          </section>

          <section>
            <p>Tooltip:</p>
            <Components.Tooltip />
          </section>
        </section>

        <h2 className="sticky top-0 z-10 -translate-x-[200px] transform pb-4 text-2xl font-semibold">
          UI-Input Components:
        </h2>
        <section>
          <section>
            <p>Button:</p>
            <Components.Button color="blue" description="Beschreibung" link=""/>
          </section>
          <section>
            <p>Inputfield:</p>
            <Components.Inputfield />
          </section>
          <section>
            <p>Slider:</p>
            <Components.Slider />
          </section>
          <section>
            <p>Switch:</p>
            <Components.Switch /> <Components.Switch checked={true} />
          </section>
        </section>

        <h2 className="sticky top-0 z-10 -translate-x-[200px] transform pb-4 text-2xl font-semibold">
          UI-Media Components:
        </h2>
        <section>
          <section>
            <p>Avatar:</p>
            <Components.Avatar />
          </section>
          <section>
            <p>Carousel:</p>
            <Components.Carousel />
          </section>
          <section>
            <p>Gallery:</p>
            <Components.Gallery />
          </section>
          <section>
            <p>Rating: needs icon</p>
            {/*<Components.Rating />*/}
          </section>
        </section>
      </main>
    </>
  );
}
