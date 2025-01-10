// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-20 -z-10"
      />
     

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(exp => (
                  <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Background Blur"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {exp.duration} {exp.location && `| ${exp.location}`}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {exp.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-semibold mb-2 text-[#16f2b3]">Responsibilities:</p>
                          <ul className="list-disc ml-5 space-y-1 text-sm">
                            {exp.responsibilities.map((task, index) => (
                              <li key={index}>{task}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-semibold mb-2 text-[#16f2b3]">Achievements:</p>
                          <ul className="list-disc ml-5 space-y-1 text-sm">
                            {exp.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.technologiesUsed && exp.technologiesUsed.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-semibold mb-2 text-[#16f2b3]">Technologies Used:</p>
                          <ul className="list-disc ml-5 space-y-1 text-sm">
                            {exp.technologiesUsed.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
