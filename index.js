require("dotenv").config();
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded())

const pokedex = [

  {    
    id:1,
    numero:"46",
    nome:"Paras",
    imagem:"/img/paras.jpg",
    tipo:"Inseto",
    descricao:"",
    altura:"",
    peso:"",
    categoria:"",
    habilidade:"",
    habilidade2:"",
    habilidade3:""    
  },

  {
    id:2,    
    numero:"47",
    nome:"Parasect",
    imagem:"/img/parasect.jpg",
    tipo:"Inseto",
    descricao:"",
    altura:"",
    peso:"",
    categoria:"",
    habilidade:"",
    habilidade2:"",
    habilidade3:""    
  },

  {
    id:3,
    numero:"60",
    nome:"Poliwag",
    imagem:"/img/poliwag.jpg",
    tipo:"Água",
    descricao:"O Pokémon girino Poliwag tem uma pele muito fina. É possível ver as entranhas em espiral do Pokémon através da pele. Apesar de ser fina, a pele também é muito flexível. Até mesmo presas afiadas ricocheteiam nele.",
    altura:"60cm",
    peso:"12,4 kg",
    categoria:"Pokémon girino",
    habilidade:"Absorção de água",
    habilidade2:"úmidade",
    habilidade3:"Nado Rápido"
  },

  {
    id:4,
    numero:"61",
    nome:"Poliwhirl",
    imagem:"/img/poliwhirl.jpg",
    tipo:"Água",
    descricao:"Olhar para o redemoinho em sua barriga causa sonolência. Esse traço de Poliwhirl tem sido usado no lugar de canções de ninar para fazer as crianças dormirem.",
    altura:"1m",
    peso:"20kg",
    categoria:"Pokémon girino",
    habilidade:"Tapa duplo",
    habilidade2:"soco com punho",
    habilidade3:"Onda borrifante"
  },

  {
    id:5,
    numero:"62",
    nome:"Poliwrath",
    imagem:"/img/poliwrath.jpg",
    tipo:"Água",
    descricao:"Seu corpo é músculo sólido. Ao nadar em mares frios, Poliwrath usa seus braços impressionantes para esmagar o gelo à deriva e avançar.",
    altura:"1m",
    peso:"20kg",
    categoria:"Pokémon girino",
    habilidade:"Soco espiral dividido",
    habilidade2:"Tapa do despertar",
    habilidade3:"Investida espiral"    
  }
]

let pokemon = undefined;

app.get("/", (req, res) => {
  res.render("index",{pokedex});
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/ad", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon); 
  message = `O Pokémon ${nome} foi cadastrado com sucesso!`; 
  res.redirect("/");
});

app.get("/detalhes/:id",(req,res) => {
  const id = +req.params.id;
  pokemon = pokedex.find(pokemon => pokemon.id === id);
  res.render("detalhes" , {pokemon,pokedex});
});

app.get("/cadastro/:id",(req,res) => {
  const id = +req.params.id;
  pokemon = pokedex.find(pokemon => pokemon.id === id);
  res.render("cadastro" , {pokemon,pokedex});  
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
