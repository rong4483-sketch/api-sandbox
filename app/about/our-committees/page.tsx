"use client";

import { motion } from "framer-motion";
import { Lightbulb, Map, GraduationCap, Scale, Home, BookOpen, FlaskConical } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/lib/motion";

const committees = [
  {
    name: "Innovation Futures Advisory Group",
    desc: "Providing sector insights, guiding the Australian Property Institute\u2019s future.",
    icon: Lightbulb,
  },
  {
    name: "State Committees",
    desc: "Shaping our advocacy agenda and providing critical advice and insight into issues arising in the industry.",
    icon: Map,
  },
  {
    name: "YPP Committees",
    desc: "The voice of the newest Members of our industry, helping inform the professional and social development of our Young Property Professionals.",
    icon: GraduationCap,
  },
  {
    name: "Standards Committee",
    desc: "An expert committee assisting in developing and maintaining exceptional industry standards.",
    icon: Scale,
  },
  {
    name: "Residential Valuation Industry Group",
    desc: "Providing industry leadership on residential valuations policies, operations and quality.",
    icon: Home,
  },
  {
    name: "National Education Committee",
    desc: "Informing and developing the educational priorities at a national level.",
    icon: BookOpen,
  },
  {
    name: "APREF Committees",
    desc: "Facilitating research and guiding scholarships, bursaries, and prizes in valuation and land economy.",
    icon: FlaskConical,
  },
];

export default function CommitteesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="Our Committees"
        description="Working with industry professionals to help shape the future."
      />

      <div className="space-y-4 text-ink/80 leading-relaxed max-w-3xl mb-12">
        <p>
          This helps us ensure we remain firmly connected to the industry and are able to respond
          to issues arising in the sector. Our committees are specifically designed to ensure the
          API meets the diverse needs of our Members across a broad range of functions. Participation
          in committees is strongly encouraged and is a great way to help shape the industry and grow
          your leadership skills.
        </p>
        <p>
          A charter governs each committee and stipulates the roles and responsibilities of various
          committee positions, as well as the duties of API staff in supporting our committees. It
          also outlines the committee terms and regular election cycles.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {committees.map((c) => {
          const Icon = c.icon;
          return (
            <motion.div key={c.name} variants={fadeUp}>
              <Card className="h-full">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 grid place-items-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{c.name}</h3>
                  <p className="text-sm text-ink/75">{c.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA Banner */}
      <div className="rounded-2xl bg-brand-500 px-8 py-10 text-center text-white">
        <h3 className="font-serif text-2xl font-semibold mb-3">Interested in joining a committee?</h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          Put your hand up to represent your region and help shape the future of the profession.
        </p>
        <Button variant="accent" size="lg">
          Expression of interest
        </Button>
      </div>
    </PageShell>
  );
}
