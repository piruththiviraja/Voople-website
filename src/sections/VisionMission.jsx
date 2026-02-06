import Reveal from "../components/animation/Reveal";

export default function VisionMission() {
return (
<section className="py-24 px-6 bg-brand-surface">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
<Reveal>
<div>
<h3 className="text-3xl font-serif text-brand-primary">Vision</h3>
<p className="mt-4 text-brand-muted">
To be a globally trusted business & recruitment solutions brand, enabling organizations to build powerful indentities, innovative products and high-performing teams.
</p>
</div>
</Reveal>
<Reveal>
<div>
<h3 className="text-3xl font-serif text-brand-primary">Mission</h3>
<p className="mt-4 text-brand-muted">
To deliver integrated manpower , branding , technology , marketing , talent and strategy solutions that help business adapt , scale and lead in a competetive digital world. 
</p>
</div>
</Reveal>
</div>
</section>
)
}