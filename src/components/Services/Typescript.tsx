import Service from './Service';

export default function Typescript() {
  return (
    <Service
      title="Typescript"
      icons={[
        <picture key="typescript">
          <img
            className="w-6"
            src="/img/skills/typescript.png"
            alt="Typescript"
          />
        </picture>,
      ]}
    >
      <p>
        Typescript est une surcouche Javascript indispensable pour tout projet
        professionel.
      </p>

      <p>
        Elle apporte une robustesse à l’application qui réduit considérablement
        sa quantité de bug.
      </p>

      <p>
        Dans le cas de projet déjà démarrés sans Typescript, il est possible de
        l’intégrer progressivement afin de consolider l’application déjà en
        place.
      </p>
    </Service>
  );
}
