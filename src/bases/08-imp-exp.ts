import { heroes, Owner, type Hero } from "../data/heroes.data";

const getHeroById = (id: number): Hero => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  if (!hero) {
    throw new Error(`No existe un héroe con el id ${id}`);
  }
  return hero;
};

console.log(getHeroById(5));

// Tarea

export const getHeroesByOwner = (owner: Owner) => {
  const heroesByOwner = heroes.filter((hero) => hero.owner === owner);
  return heroesByOwner;
};
