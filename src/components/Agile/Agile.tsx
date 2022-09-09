import clsx from 'clsx';

interface AgileProps {
  className?: string;
}

export default function Agile({ className }: AgileProps) {
  return (
    <section className={clsx('bg-tertiary-main px-6 py-6', className)}>
      <div className="bg-tertiary-light px-8 py-10 md:px-14 md:py-14 xl:translate-x-10 xl:translate-y-10">
        <h2>Une gestion de projet agile</h2>

        <p className="text-xl mt-2 mb-8 md:mt-4 md:mb-12 md:text-2xl ">
          pour un déroulement fluide et efficace.
        </p>

        <div className="flex flex-col md:flex-row md:mb-14">
          <div className="flex-shrink-0 mx-auto md:ml-8 md:order-2 lg:ml-auto ">
            <picture>
              <img
                src="/img/agile.svg"
                alt="Agile"
                className="w-40 md:w-60 lg:w-72"
              />
            </picture>
          </div>

          <div className="max-w-2xl md:max-w-xl md:order-1">
            <p>
              Que votre projet repose sur une méthode de gestion de projet
              SCRUM, Kanban ou autre, je saurai m’adapter et m’intégrer à votre
              équipe.
            </p>

            <p>
              Dans le cas d’un nouveau projet, je pourrai vous aiguiller vers la
              méthode adéquate à adopter pour que vous puissiez piloter votre
              projet de manière efficace et adaptée au projet.
            </p>

            <div className="flex items-center mt-12">
              <picture className="w-20 mr-8">
                <img src="/img/jira-logo.svg" alt="Jira" />
              </picture>

              <picture className="w-24 mr-8">
                <img src="/img/github-logo.png" alt="GitHub" />
              </picture>

              <picture className="w-24 mr-8">
                <img src="/img/slack-logo.png" alt="Slack" />
              </picture>

              <picture className="w-24">
                <img src="/img/loom-logo.svg" alt="Loom" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
