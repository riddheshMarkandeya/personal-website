'use client'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const RM_tech = ['Node.js', 'Angular', 'AWS', 'Terraform', 'SQS', 'Lambda', 'CircleCi', 'Nest.js']
  const FS_tech = ['.Net Core', 'Angular', 'React.js', 'Elasticsearch', 'Kafka', 'SQL Server', 'Kibana', 'Vue.js', 'Django', 'Python', 'Javascript', 'C#']
  const JH_tech = ['Next.js', 'React.js', 'Tailwindcss']
  const EA_tech = ['Jupyter Notebook', 'Pandas', 'NLP', 'Seaborn']
  const SA_tech = ['QisKit', 'Python']
  const CB_tech = ['Unity', 'C#']

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const [aboutActive, setAboutActive] = useState(false);
  const [experienceActive, setExperienceActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);

  const refs = [aboutRef, experienceRef, projectsRef];
  const nav = {
    about: {
      isActive: false,
      isIntersecting: false,
      intersectionRatio: 0,
      toggle: setAboutActive
    },
    experience: {
      isActive: false,
      isIntersecting: false,
      intersectionRatio: 0,
      toggle: setExperienceActive
    },
    projects: {
      isActive: false,
      isIntersecting: false,
      intersectionRatio: 0,
      toggle: setProjectsActive
    },
  }

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let max = -1;
      let inViewId = '';
      entries.forEach((entry) => {
        const navElm = nav[entry.target.id as keyof typeof nav];
        navElm.isIntersecting = entry.isIntersecting;
        navElm.intersectionRatio = entry.intersectionRatio;
      });

      Object.entries(nav).forEach(([key, value]) => {
        if (value.isIntersecting && value.intersectionRatio > max) {
          max = value.intersectionRatio;
          inViewId = key;
        }
      });

      if (max !== -1 && inViewId !== '') {
        Object.entries(nav).forEach(([key, value]) => {
          if (key === inViewId) {
            value.toggle(true);
          } else {
            value.toggle(false);
          }
        });
      }
    };

    const observer = new IntersectionObserver(observerCallback, { 
      // threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] 
      threshold: [0, 0.25, 0.5, 0.75, 1] 
    });
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-1 gap-2 lg:p-16 px-8 pt-12 text-slate-200">
      <aside className="lg:self-start lg:col-span-2 lg:sticky lg:top-16 lg:pt-12 lg:pl-12 lg:pr-12 lg:grid lg:grid-cols-1 lg:auto-rows-min lg:h-">
        <p className="text-3xl font-bold"><a href='/'>Riddhesh Markandeya</a></p>
        <p className="text-xl py-3">Software Engineer</p>
        <p className="text-slate-400">I'm a Software Engineer who thrives on problem-solving and loves exploring new technologies.</p>
        <ul className="py-10 font-bold md:hidden lg:block hidden text-sm">
          <li className="py-3 text-slate-400">
            <a href="#about" className={`group transition duration-300 inline-block hover:text-slate-200 focus-visible:text-slate-200 ${aboutActive ? 'text-slate-200': ''}`}>ABOUT
            <span className={`block max-w-0 group-hover:max-w-full group-focus:max-w-full ${aboutActive ? 'max-w-full': ''} transition-all duration-500 h-0.5 bg-slate-400`}></span>
            </a>
          </li>
          <li className="py-3 text-slate-400">
            <a href="#experience" className={`group transition duration-300 inline-block hover:text-slate-200 focus-visible:text-slate-200 ${experienceActive ? 'text-slate-200': ''}`}>EXPERIENCE
            <span className={`block max-w-0 group-hover:max-w-full group-focus:max-w-full ${experienceActive ? 'max-w-full': ''} transition-all duration-500 h-0.5 bg-slate-400`}></span>
            </a>
          </li>
          <li className="py-3 text-slate-400">
            <a href="#projects" className={`group transition duration-300 inline-block hover:text-slate-200 focus-visible:text-slate-200 ${projectsActive ? 'text-slate-200': ''}`}>PROJECTS
            <span className={`block max-w-0 group-hover:max-w-full group-focus:max-w-full ${projectsActive ? 'max-w-full': ''} transition-all duration-500 h-0.5 bg-slate-400`}></span>
            </a>
          </li>
        </ul>
        <p className="flex gap-8 text-slate-400 lg:py-10 lg:mb-0 md:py-10 md:mb-16 py-10 mb-16">
          <a className='hover:text-slate-200' href='https://github.com/riddheshMarkandeya' target='_blank' aria-label="GitHub" title='GitHub'><FontAwesomeIcon icon={faGithub} size='xl'/> </a>
          <a className='hover:text-slate-200' href='https://linkedin.com/in/riddhesh2307' target='_blank' aria-label="LinkedIn" title='LinkedIn'><FontAwesomeIcon icon={faLinkedin} size='xl'/> </a>
          <a className='hover:text-slate-200' href='https://stackoverflow.com/users/5773530/riddhesh-markandeya' target='_blank' aria-label="StackOverflow" title='StackOverflow'><FontAwesomeIcon icon={faStackOverflow} size='xl'/> </a>
        </p>
      </aside>
      <main className="lg:col-span-3 lg:pt-12 lg:pl-12 lg:pr-20">
        <section id="about" ref={aboutRef} className='scroll-mt-28 lg:scroll-mt-28 mb-20 pb-10 text-slate-400'>
          <h2 className='sticky top-0 z-20 backdrop-blur uppercase -mx-8 px-8 lg:hidden text-slate-200 py-5'>About</h2>
          <p className='pb-6'>I'm a computer science enthusiast and software engineer, holding a Master's in Computer Science from Wayne State University. With experience at <a className='hover:text-bluehl focus-visible:text-bluehl text-slate-200' href='https://www.rocketmortgage.com/' target='_blank' aria-label="Rocket Mortgage">Rocket Mortgage</a> and <a className='hover:text-bluehl focus-visible:text-bluehl text-slate-200' href='https://www.factset.com/' target='_blank' aria-label="FactSet">FactSet</a>, I'm passionate about leveraging technology to drive innovation and solve complex challenges.</p>

          <p className='pb-6'>
          Outside of work, I love diving into different hobbies and interests. Whether it's geeking out over "Avatar: The Last Airbender" and soaking up the wisdom of <a className='hover:text-bluehl focus-visible:text-bluehl text-slate-200' href='/tea-iroh.gif' target='_blank' aria-label="Gif of Iroh asking to drink tea.">Iroh</a>, gaming on Rocket League and Assassin's Creed, or simply enjoying leisurely walks outdoors, I'm all about embracing life's many adventures.</p>

          <p className='pb-6'>
          Through my work in quantum computing with <a className='hover:text-bluehl focus-visible:text-bluehl text-slate-200' href='https://github.com/riddheshMarkandeya/shors-algorithm-quantum' target='_blank' aria-label="Shor's Algorithm project">Shor's Algorithm</a> and cybersecurity solutions, I aim to push the boundaries of technology and contribute to its advancement. I'm committed to sharing knowledge and fostering collaboration within the tech community, always eager to connect and explore new opportunities for growth and learning.
          </p>
        </section>

        <section id="experience" ref={experienceRef} className='scroll-mt-28 lg:scroll-mt-28 mb-20 pb-10'>
          <h2 className='sticky top-0 z-20 backdrop-blur uppercase -mx-8 px-8 lg:hidden text-slate-200 py-5'>Experience</h2>
          <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6'>
            <div className='text-slate-400 text-sm lg:pr-2 md:pr-4 lg:col-span-2 md:col-span-1'>MAY &#8210; AUG 2023</div>
            <div className='lg:col-span-4 md:col-span-5 pb-10'>
              <div className='pb-3'>
                <a className='hover:text-bluehl focus-visible:text-bluehl group transition-all duration-500' href='https://www.rocketmortgage.com/' target='_blank'>Software Engineer Intern &#64; Rocket Mortgage <span className='group-hover:pl-1 group-hover:font-bold group-focus:pl-1 group-focus:font-bold transition-all duration-400'>&#8599;</span>
                </a>
              </div>
              <div className='text-slate-400 text-sm leading-relaxed pb-2'>
              Developed a sophisticated verification tool, enhancing loan processes significantly. Played a key role in transitioning AMP licenses, improving operational efficiency. Led the migration to a cloud-based API, enhancing server response times noticeably. Spearheaded the development of essential tools, refining loan management processes.
              </div>
              <div>
              {RM_tech.map((item) => (
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 text-xs leading-none text-bluehl bg-badgebg rounded-full" key={item}>{item}</span>
              ))}
              </div>
            </div>

            <div className='text-slate-400 text-sm lg:pr-2 md:pr-4 lg:col-span-2 md:col-span-1'>JUL 2017 &#8210; DEC 2021</div>
            <div className='lg:col-span-4 md:col-span-5'>
              <div>
                <a className='hover:text-bluehl focus-visible:text-bluehl group transition-all duration-500' href='https://www.factset.com/' target='_blank'>Software Engineer III &#64; FactSet <span className='group-hover:pl-1 group-hover:font-bold group-focus:pl-1 group-focus:font-bold transition-all duration-400'>&#8599;</span>
                </a>
              </div>
              <div className='text-slate-400'>Software Engineer II</div>
              <div className='text-slate-400 pb-3'>Software Engineer I</div>
              <div className='text-slate-400 text-sm leading-relaxed pb-2'>
              Guided a team in refining Formula Management products, significantly boosting financial analyst productivity. Reduced feature deployment cycles and increased release frequency through efficient CI/CD and Agile methodologies. Implemented performance enhancements, resulting in a notable increase in API speed. Introduced innovative "Formula Unit Testing" protocols, improving code quality. Managed Elasticsearch clusters, contributing to enhanced system uptime. Led AWS migration for the Central Logging Platform, achieving significant improvements in data processing and logging capacity.
              </div>
              <div>
              {FS_tech.map((item) => (
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 text-xs leading-none text-bluehl bg-badgebg rounded-full" key={item}>{item}</span>
              ))}
              </div>
            </div>

            <div className='text-slate-200 pt-8 font-bold lg:col-span-4 md:col-span-4'>
              <a className='hover:text-bluehl focus-visible:text-bluehl group transition-all duration-500' href='/resume.pdf' target='_blank'>View Full R&#233;sum&#233; <span className='group-hover:pl-1 group-hover:font-bold group-focus:pl-1 group-focus:font-bold transition-all duration-400'>&#8599;</span>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" ref={projectsRef} className='scroll-mt-28 lg:scroll-mt-28 mb-20 pb-10'>
          <h2 className='sticky top-0 z-20 backdrop-blur uppercase -mx-8 px-8 lg:hidden text-slate-200 py-5'>Projects</h2>
          <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6'>
            <div className='lg:pr-4 md:pr-4 lg:col-span-2 md:col-span-1 hidden md:block lg:block'>
              <Image
                src="/job-apply-helper.png"
                alt="Job Apply Helper"
                width={256}
                height={128}
                className='rounded border-2 border-slate-200/10 hover:border-slate-200/30'
              />
            </div>
            <div className='lg:col-span-4 md:col-span-5 pb-10'>
              <div className='pb-3'>
                <a className='hover:text-bluehl focus-visible:text-bluehl group transition-all duration-500' href='https://github.com/riddheshMarkandeya/job-apply-helper' target='_blank'>Job Apply Helper <span className='group-hover:pl-1 group-hover:font-bold group-focus:pl-1 group-focus:font-bold transition-all duration-400'>&#8599;</span>
                </a>
              </div>
              <div className='text-slate-400 text-sm leading-relaxed pb-2'>
              A productivity tool tailored for job seekers, Job Apply Helper simplifies the application process. Effortlessly add copyable fields, track job post URLs to meet daily goals, and enjoy persistent data storage locally. Streamline your job search with this intuitive Next.js project.
              </div>
              <div>
              {JH_tech.map((item) => (
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 text-xs leading-none text-bluehl bg-badgebg rounded-full" key={item}>{item}</span>
              ))}
              </div>
              {/* sm image block */}
              <div className='lg:hidden md:hidden py-2'>
                <Image
                  src="/job-apply-helper.png"
                  alt="Job Apply Helper"
                  width={256}
                  height={128}
                  className='rounded border-2 border-slate-200/10 hover:border-slate-200/30'
                />
              </div>
              {/* sm image block */}
            </div> 

            <div className='lg:pr-4 md:pr-4 lg:col-span-2 md:col-span-1 hidden md:block lg:block'>
              <Image
                src="/US-election-tweets-analysis.png"
                alt="US Election Tweets Analysis"
                width={256}
                height={128}
                className='rounded border-2 border-slate-200/10 hover:border-slate-200/30'
              />
            </div>
            <div className='lg:col-span-4 md:col-span-5 pb-10'>
              <div className='pb-3'>
                <a className='hover:text-bluehl focus-visible:text-bluehl group transition-all duration-500' href='https://github.com/riddheshMarkandeya/2020-US-election-tweets-analysis' target='_blank'>US Election Tweets Analysis <span className='group-hover:pl-1 group-hover:font-bold group-focus:pl-1 group-focus:font-bold transition-all duration-400'>&#8599;</span>
                </a>
              </div>
              <div className='text-slate-400 text-sm leading-relaxed pb-2'>
              Explore the dynamics of the 2020 US election through tweet analysis. This project delves into sentiment analysis to classify candidate popularity on a state and overall level. Dive into the dataset to uncover insights into public sentiment surrounding the election.
              </div>
              <div>
              {EA_tech.map((item) => (
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 text-xs leading-none text-bluehl bg-badgebg rounded-full" key={item}>{item}</span>
              ))}
              </div>
              {/* sm image block */}
              <div className='lg:hidden md:hidden py-2'>
                <Image
                  src="/US-election-tweets-analysis.png"
                  alt="US Election Tweets Analysis"
                  width={256}
                  height={128}
                  className='rounded border-2 border-slate-200/10 hover:border-slate-200/30'
                />
              </div>
              {/* sm image block */}
            </div>

            <div className='lg:pr-4 md:pr-4 lg:col-span-2 md:col-span-1 hidden md:block lg:block'>
              <Image
                src="/shors-algorithm-quantum.png"
                alt="Shor's Algorithm implementation"
                width={256}
                height={128}
                className='rounded border-2 border-slate-200/10 hover:border-slate-200/30'
              />
            </div>
            <div className='lg:col-span-4 md:col-span-5 pb-10'>
              <div className='pb-3'>
                <a className='hover:text-bluehl focus-visible:text-bluehl group transition-all duration-500' href='https://github.com/riddheshMarkandeya/shors-algorithm-quantum' target='_blank'>Quantum Factorizer <span className='group-hover:pl-1 group-hover:font-bold group-focus:pl-1 group-focus:font-bold transition-all duration-400'>&#8599;</span>
                </a>
              </div>
              <div className='text-slate-400 text-sm leading-relaxed pb-2'>
              Discover Shor's Algorithm implementation using IBM Qiskit, delving into quantum computing's groundbreaking potential in factorization tasks.
              </div>
              <div>
              {SA_tech.map((item) => (
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 text-xs leading-none text-bluehl bg-badgebg rounded-full" key={item}>{item}</span>
              ))}
              </div>
              {/* sm image block */}
              <div className='lg:hidden md:hidden py-2'>
                <Image
                  src="/shors-algorithm-quantum.png"
                  alt="Shor's Algorithm implementation"
                  width={256}
                  height={128}
                  className='rounded border-2 border-slate-200/10 hover:border-slate-200/30'
                />
              </div>
              {/* sm image block */}
            </div>

            <div className='lg:pr-4 md:pr-4 lg:col-span-2 md:col-span-1 hidden md:block lg:block'>
              <Image
                src="/Captain-Blaster.png"
                alt="Captain Blaster Game"
                width={256}
                height={128}
                className='rounded border-2 border-slate-200/10 hover:border-slate-200/30'
              />
            </div>
            <div className='lg:col-span-4 md:col-span-5 pb-10'>
              <div className='pb-3'>
                <a className='hover:text-bluehl focus-visible:text-bluehl group transition-all duration-500' href='https://github.com/riddheshMarkandeya/Captain-Blaster' target='_blank'>Captain Blaster <span className='group-hover:pl-1 group-hover:font-bold group-focus:pl-1 group-focus:font-bold transition-all duration-400'>&#8599;</span>
                </a>
              </div>
              <div className='text-slate-400 text-sm leading-relaxed pb-2'>
              Embark on an interstellar adventure with "Captain Blaster", a captivating 2D Unity game featuring spaceships, asteroids, and power-ups!
              </div>
              <div>
              {CB_tech.map((item) => (
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 text-xs leading-none text-bluehl bg-badgebg rounded-full" key={item}>{item}</span>
              ))}
              </div>
              {/* sm image block */}
              <div className='lg:hidden md:hidden py-2'>
                <Image
                  src="/Captain-Blaster.png"
                  alt="Captain Blaster Game"
                  width={256}
                  height={128}
                  className='rounded border-2 border-slate-200/10 hover:border-slate-200/30'
                />
              </div>
              {/* sm image block */}
            </div>
            

            <div className='text-slate-200 pt-8 font-bold lg:col-span-4 md:col-span-4'>
              <a className='hover:text-bluehl focus-visible:text-bluehl group transition-all duration-500' href='https://github.com/riddheshMarkandeya?tab=repositories' target='_blank'>View All Projects <span className='group-hover:pl-1 group-hover:font-bold group-focus:pl-1 group-focus:font-bold transition-all duration-400'>&#8599;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
