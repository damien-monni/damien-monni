import Craftman from '../Craftman/Craftman';
import Hero from '../Hero/Hero';

interface HeroAndCraftmanProps {
  className?: string;
}

export default function HeroAndCraftman({ className }: HeroAndCraftmanProps) {
  return (
    <section className={className}>
      <Hero className="max-w-6xl mx-auto" />

      {/* We make the Craftman section slightly wider than the Hero */}
      <div className="max-w-6xl mx-auto relative z-10 -translate-y-1">
        <Craftman className="-mx-20" />
      </div>
    </section>
  );
}
