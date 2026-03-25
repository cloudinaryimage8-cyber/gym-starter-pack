import { Dumbbell, Heart, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Dumbbell className="h-7 w-7 text-primary" />
          Gymos
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center px-8 py-24 text-center">
        <h2 className="text-5xl font-extrabold tracking-tight mb-4">
          Your Fitness Journey<br />
          <span className="text-primary">Starts Here</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mb-10">
          Track workouts, set goals, and crush them — all in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full">
          {[
            { icon: Dumbbell, title: "Workouts", desc: "Custom training plans" },
            { icon: Heart, title: "Health", desc: "Track your vitals" },
            { icon: Trophy, title: "Goals", desc: "Achieve milestones" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border bg-card p-6 text-card-foreground">
              <Icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
