import { Tweet } from "./models/tweet";
import { User } from "./models/user";

//<--------------------- Criar usuários -------------------------------------->

const isabela = User.createUser("Isabella Drake", "IsaD", "niwap@hopuboc.ru", "Isa123ISA");
const bernice = User.createUser("Bernice Moreno", "Bern", "jih@fiwef.kz", "Bern123bern");
const sue = User.createUser("Sue Olson", "suO", "giwli@dabkuw.ps", "Sue123Oln");

//<--------------------- Criar tweets -------------------------------------->

const tweet1 = new Tweet("Primeiro tweet de IsaD", "Normal", isabela);
const tweet2 = new Tweet("Segundo tweet de IsaD", "Normal", isabela);
const tweet3 = new Tweet("Primeiro tweet de Bern", "Normal", bernice);
const tweet4 = new Tweet("Primeiro tweet de suO", "Normal", sue);

//<--------------------- Enviar tweets -------------------------------------->

isabela.sendTweet(tweet1);
isabela.sendTweet(tweet2);
bernice.sendTweet(tweet3);
sue.sendTweet(tweet4);

//<--------------------- Seguir usuários -------------------------------------->

bernice.follow(isabela);
bernice.follow(sue);

//<--------------------- Curtir tweets -------------------------------------->

tweet1.like(isabela);
tweet1.like(sue);
tweet2.like(sue);
tweet1.like(bernice);
tweet4.like(bernice);

//<--------------------- Responder tweets -------------------------------------->

tweet1.reply("Primeira resposta para o tweet", isabela);
tweet1.reply("Segunda resposta para o tweet", sue);

//<--------------------- Mostrar feeds -------------------------------------->

bernice.showFeed();
isabela.showFeed();
sue.showFeed();
