export default function Timeline() {
  const phases = [
    {
      number: "01",
      title: "Brand Discovery",
      timing: "Pre-sale",
      description:
        "We uncover your brand’s core identity, target audience, and unique value so we can shape the most impactful strategy."
    },
    {
      number: "02",
      title: "Kickoff & Onboarding",
      timing: "Day 1",
      description:
        "We align on project scope, roles, tools, and expectations to ensure a smooth start and clear collaboration."
    },
    {
      number: "03",
      title: "Content & Creative Alignment",
      timing: "Week 1",
      description:
        "Our team presents moodboards, sample content, and campaign directions to make sure we’re fully aligned on tone and vision."
    },
    {
      number: "04",
      title: "Launch & Monitor",
      timing: "Week 2–3",
      description:
        "We launch initial campaigns, monitor KPIs, and ensure everything is tracking correctly for maximum early impact."
    },
    {
      number: "05",
      title: "Strategy Refinement",
      timing: "Day 30",
      description:
        "We review the first month’s data, assess wins and gaps, and fine-tune your growth strategy moving forward."
    },
    {
      number: "06",
      title: "Ongoing Growth",
      timing: "90-Day Cycles",
      description:
        "We deliver continuous optimizations, A/B tests, creative refreshes, and detailed reporting to keep you scaling."
    }
  ];

  return (
    <section id="timeline" className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          Client Timeline to Success
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-700 text-white text-2xl font-bold mb-4 shadow">
                {phase.number}
              </div>
              <h3 className="text-xl font-extrabold mb-2 text-gray-900">
                {phase.title}
              </h3>
              <p className="text-sm font-semibold text-purple-700 mb-2 uppercase tracking-wide">
                {phase.timing}
              </p>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}