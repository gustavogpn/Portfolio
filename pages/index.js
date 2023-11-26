// next image
import Image from "next/image";

// components
import ParticlesConteiner from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '../variants'


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 
      to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto">
          {/* title */}
          <motion.h1 
            variants={fadeIn('down', 0.2 )}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h1"
          >
              Transforme Ideias <br /> Em {''} 
              <span className="text-accent">Realidade Digital</span>
          </motion.h1>
          {/* subtitle */}
            <motion.p 
              variants={fadeIn('down', 0.3 )}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
              semper enim ac nisi euismod,vestibulum volutpat enim imperdiet. 
              Integer eu facilisis sapien. 
            </motion.p>
            { /* Btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectBtn />
            </div>
            <motion.div 
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="hidden xl:flex"
            >
              <ProjectBtn />
            </motion.div>
            
        </div> 
      </div>
      {/* image */}
      <div>Image</div>
    </div>
  );
};

export default Home;
