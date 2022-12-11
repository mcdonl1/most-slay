import Head from "next/head";
import { HTMLAttributes, useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Something Something Slay</title>
      </Head>
      <div className="m-0 h-full min-h-screen w-screen bg-slate-900 p-5 text-center font-mono text-blue-100">
        <h1 className="p-10 text-center text-3xl">VOTE FOR MOST SLAY</h1>
        <p className="text-center">
          Vote for which of the two displayed pokemon (or something else) is the
          most slay
        </p>
        <div className="flex flex-wrap justify-evenly">
          <div
            className="mt-10 flex h-60 w-60 flex-col items-center justify-evenly rounded-md bg-slate-800 hover:bg-slate-700"
            onClick={() => {
              alert("TODO: cast vote for Meowth");
            }}
          >
            <h2 className="text-2xl">Meowth</h2>
            <img
              height="180px"
              width="180px"
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"
            />
          </div>
          <div
            className=" mt-10 flex h-60 w-60 flex-col items-center justify-evenly rounded-md bg-slate-800 hover:bg-slate-700 sm:mb-5"
            onClick={() => {
              alert("TODO: cast vote for Charmander");
            }}
          >
            <h2 className="text-2xl">Charmander</h2>
            <img
              height="180px"
              width="180px"
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
