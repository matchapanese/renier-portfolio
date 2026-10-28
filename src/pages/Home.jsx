import { useState } from 'react';
import Stack from '../component/Stack';
import PortfolioImage1 from '../assets/portfolio-pic-1.jpeg';
import PortfolioImage2 from '../assets/portfolio-pic-2.jpeg';
import PortfolioImage3 from '../assets/portfolio-pic-3.jpeg';
import PortfolioImage4 from '../assets/portfolio-pic-4.jpeg';
import { div } from 'motion/react-client';

const images = [
  PortfolioImage1,
  PortfolioImage2,
  PortfolioImage3,
  PortfolioImage4
];

export default function Home() {
  const [details, setDetails] = useState('experience');

  const activeCustomStyle = {
    backgroundColor: '#030712',
    color: '#FAFAFA'
  }

  console.log(details)

  return (
    <div className="font-body text-secondary mt-8 bg-primary flex flex-col gap-20">
      
      <section>
        <div className="flex justify-between gap-5">
          <div className="max-w-[350px]">
            <h2 className="font-heading text-4xl">
              Hi, I'm Renier 👋
            </h2>

            <p className="mt-1.5 text-sm">
              Based in the Philippines
            </p>

            <p className="mt-6 leading-7">
              I am a Full-Stack Developer passionate about building solutions that solve real-world problems.
            </p>

            <button
              className="mt-8 text-sm font-semibold ring ring-accent/50 px-4 py-2 rounded-md cursor-pointer hover:bg-accent/50 hover:border-none"
            >
              View Resume
            </button>
          </div>

          <div style={{ width: 230, height: 230 }}>
            <Stack
              layout="fan"
              sendToBackOnClick={false}
              cards={images.map((src, i) => <img key={src} src={src} alt={`Card ${i + 1}`} />)}
              visible={4}
              spread={0.5}
              depth={0.5}
              radius={16}
              frame={0}
              frameColor="#ffffff"
              shadow
              tilt={30}
              threshold={90}
              speed={1}
              autoplay={false}
              autoplayDelay={3000}
              pauseOnHover={false}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-3xl">
          Experience & Education
        </h2>

        <div className="mt-4 rounded-lg bg-accent/25">
          <div className="flex items-center p-1">
            <button
              onClick={() => setDetails('experience')}
              className="p-1 rounded-md font-medium flex-1 text-accent cursor-pointer"
              style={details === 'experience' ? activeCustomStyle : undefined}
            >
              Experience
            </button>

            <button
              onClick={() => setDetails('education')}
              className="p-1 rounded-md font-medium flex-1 text-accent cursor-pointer"
              style={details === 'education' ? activeCustomStyle : undefined}
            >
              Education
            </button>
          </div>
        </div>

        <div className="mt-4">
          {details === 'experience' &&
            <div className="py-4 px-6 border border-accent/50 rounded-lg">
              <div className="">
                <h5 className="font-bold">
                  Technodream Web Works
                </h5>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-accent">
                    Web Developer Intern
                  </p>

                  <p className="text-sm text-accent">
                    Aug 2025 - Dec 2025
                  </p>
                </div>

                <ul className="mt-4 ml-6 list-disc text-sm">
                  <li className="mb-2">
                    Developed a client advertisement website using HTML, CSS, JavaScript, and PHP, delivering a functional and user-friendly web solution.
                  </li>

                  <li className="mb-2">
                    Implemented responsive web design and cross-device layouts, ensuring a consistent and accessible user experience across desktop, tablet, and mobile devices.
                  </li>
                </ul>
              </div>
            </div>
          }

          {details === 'education' &&
            <div className="py-4 px-6 border border-accent/50 rounded-lg">
              <div className="">
                <h5 className="font-bold">
                  Data Center College of the Philippines
                </h5>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-accent">
                    BS in Information Technology
                  </p>

                  <p className="text-sm text-accent">
                    2021 - 2026
                  </p>
                </div>

                <ul className="mt-4 ml-6 list-disc text-sm">
                  <li className="mb-2">
                    Made a Student Housing Security System that protects both landlord and student from scam attack. The system makes it easy for landlords to advertise their property. Meanwhile the system provides variety of listings that are safe, efficient, and convenient for students.
                  </li>
                </ul>
              </div>
            </div>
          }
        </div>
      </section>

      <section>
        <h2 className="font-heading text-3xl">
          Featured Projects
        </h2>
        
        <div>

        </div>
      </section>
    </div>
  );
}