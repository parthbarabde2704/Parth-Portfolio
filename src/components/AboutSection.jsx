import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8 md:pr-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I’m a frontend developer with a background in BCCA, focused on
              building clean, responsive and user-friendly web interfaces using
              HTML, CSS, JavaScript and React.
            </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
  <a href="#contact" className="cosmic-button">
    Get In Touch
  </a>

  <a
    href="/ParthBarabde27.pdf"
    download
    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  >
    Download CV
  </a>
</div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex flex-col gap-8 items-center md:items-start md:pl-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">Frontend Development</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">Problem Solver</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">Project Experience</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
