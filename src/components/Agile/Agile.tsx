import clsx from 'clsx';

interface AgileProps {
  className?: string;
}

export default function Agile({ className }: AgileProps) {
  return (
    <section className={clsx('bg-tertiary-main', className)}>
      <div className="bg-tertiary-light px-14 py-14 translate-x-10 translate-y-10">
        <h2>Une gestion de projet agile</h2>

        <p className="text-2xl mb-12">
          pour un déroulement fluide et efficace.
        </p>

        <div className="flex mb-14">
          <div className="max-w-xl">
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

          <div className="flex-shrink-0 mx-auto">
            <picture>
              <img src="/img/agile.svg" alt="Agile" className="w-72" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
