'use client';

import Title from '@/components/Title/Title';

import data from '@/data/common.json';
import IconBtn from '@/components/IconBtn/IconBtn';

const Home = () => {
  const mainPage = data.mainPage;
  return (
    <>
      <Title>{mainPage.title}</Title>
      <p className="font-montserrat">{mainPage.description}</p>

      <IconBtn icon="cross" onClick={() => {}} classes="mt-8"></IconBtn>
      <IconBtn icon="scroll" onClick={() => {}} classes="ml-8"></IconBtn>
      <IconBtn icon="arrow" onClick={() => {}} classes="mb-8"></IconBtn>
      <IconBtn icon="arrow" onClick={() => {}} reverse classes="m-8"></IconBtn>
    </>
  );
};

export default Home;
