import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaWordpress,
  FaPhp,
} from "react-icons/fa";

import {
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// components

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';



//  data
const aboutData = [
  {
    title: 'habilidades',
    info: [
      {
        title: 'Desenvolvimento Web',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaPhp />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
        <SiAdobexd />, 
        <SiAdobephotoshop />
      ],
      },
    ],
  },
  {
    title: 'Experiência',
    info: [
      {
        title: 'Desenvolvedor Web - Freelancer',
        stage: '2020 - 2023',
      },
      {
        title: 'Empreendedor - Agência Digital',
        stage: '',
      },
    ],
  },
  {
    title: 'credenciais',
    info: [
      {
        title: 'Graduado em Análise e Desenvolvimento de Sistemas',
        stage: '2022 - 2024',
      },
      {
        title: 'Dezenas de cursos e certificados',
        stage: '',
      },
    ],
  },
];

//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const About = () => {
  const[index, setIndex] = useState(0)
  console.log(index);
  return (
   <div className='h-full bg-primary/30 py-32 text-center xl:text-left'
   >
    <Circles />
    {/* avatar img */}
    <motion.div 
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className='hidden xl:flex absolute bottom-0 -left-[370px]'
    >
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row 
    gap-x-6'>
      {/* text */}
      <div className='flex-1 flex flex-col justify-center'>
        <h2>Boas <span>Ideas </span>Criam Designs Fantásticos.</h2>
        <p>Há 3 anos, eu comecei com o Desenvolvimento Web, desde então estudo constantemente 
        as tecnologias mais inovadoras. Já participei de vários projetos, com ênfase em sites 
        institucionais, landing pages e e-commerces. Graduado em Análise e Desenvolvimento
        de Sistemas, faço a ponte entre sua ideia e um negócio de sucesso.</p>
      </div>
      {/* info */}
        <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
             return (
              <div 
                key={itemIndex}
                className={`${
                  index === itemIndex 
                  && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
              } cursor-pointer capitalize xl:text-lg relative after:w-8
                after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex)=>  {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row
                max-w-max gap-x-2 items-center text-white/60'>
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'></div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                      {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
