const express = require('express');
const router = express.Router();
const post = require('../models/post');

   router.get('/', (req, res) => {
    res.render('home');
     });

     router.get('/consulta', (req, res) => {
        post.findAll().then(function(posts){
          res.render('Consulta/consulta',{posts:posts});
           console.log(posts)
           }
         )
      });

      router.get("/editar/:id", function(req, res)
    {
        //post.findAll({where:{id: req.params.id}}).then(function(post){
         post.findByPk(req.params.id).then(function(post){
        res.render("Editar/editar", {post:post});
        console.log(post)
      })
    })

    router.get('/excluir/:id', function(req, res){
        post.destroy({where:{id:req.params.id}})
        .then(function(){
            res.redirect('/consulta')});
            }
             )

     router.get('/cadastro', (req, res) => {
        post.findAll().then(function(posts){
          res.render('Cadastro/cadastro',{posts:posts});
           console.log(posts)
           }
         )
     });

     router.post('/cadastro', function(req, res){
        post.create({
            nome:req.body.nome,
            email:req.body.email,
            telefone:req.body.telefone,
            data_contato:req.body.data_contato,
            observacao:req.body.observacao,
            origem:req.body.origem
           }).then(function(){
         res.render("home")
        }).catch(function(erro){
         res.send("Erro ao enviar dados: "+erro)
        })
     });

     router.post('/editar/:id', function(req, res){
         post.update({
             nome:req.body.nome,
             email:req.body.email,
             telefone:req.body.telefone,
             data_contato:req.body.data_contato,
             observacao:req.body.observacao,
             origem:req.body.origem
          },{where:{id: req.params.id}}).then(function(){
             res.redirect('/consulta')
         }).catch(function(erro){
             res.send('Erro ao atualizar o post'+erro)
         })
     })

module.exports = router;