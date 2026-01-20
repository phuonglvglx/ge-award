import { NomineeCard } from "./nominee-card"

interface Nominee {
  id: number
  name: string
  department: string
  image: string
  achievements: string[]
}

interface NomineeGridProps {
  nominees: Nominee[]
}

export function NomineeGrid({ nominees }: NomineeGridProps) {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nominees.map((nominee, index) => (
            <NomineeCard key={nominee.id} nominee={nominee} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
