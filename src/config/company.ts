// Podaci o firmi.
// Pravi podaci su u src/data/company.json — taj fajl NIJE u git-u (vidi .gitignore).
// Ako ne postoji (npr. posle kloniranja repozitorijuma), koriste se primer-podaci
// iz company.example.json. Za pravi sajt: kopirati example u company.json i popuniti.
import example from '../data/company.example.json';

const local = import.meta.glob<{ default: typeof example }>('../data/company.json', { eager: true });

const company: typeof example = local['../data/company.json']?.default ?? example;

export default company;
