var express =require('express');
var loginModel=require('../../models/home');
var app =module.exports=express();

app.set('views', __dirname+'/views');

app.get("/home", function(req,res)
    {
    	if(!req.session.idAlum)
	{
		res.redirect("/");
	}

		var idAlum=req.session.idAlum;

    	homeModel.getData(idAlum, function(data)
    	{
    		if(data)
    		{
    			
	    		//si los datos no son correctos mandamos error como respuesta
                //a ajax,´así sabe que no ha sido correcto el login
	    		if(data.msg === "error")
	    		{
	    			res.send("error", 200);
	    		}
                //en otro caso creamos la sesión y mandamos logueado,
                //con lo que ajax redirigira a la home al usuario con 
                //la sesión iniciada 
	    		else
	    		{
	    			
	    			res.render('home',{
					title:'Inicio',
					materias:data

					});
    			

	    		}
	    	}
	    	else
	    	{
	    		res.send("error", 200);
	    	}
    	});
    });

app.get("/eval/:idmat-:idemp",function(req,res){
	if(!req.session.idAlum)
	{
		res.redirect("/");
	}


	var idmat=req.params.idmat;
	var idemp=req.params.idemp;
	var idalum=req.session.idAlum;

	homeModel.getInfo(idmat,idemp,idalum,function(data){
		if(data)
		{
			if(data.msg==="error")
			{
				res.render('error',{
				title:'Error',
				//materias:data

					});
    			
			}
			else
			{

			homeModel.getMat(idmat,idemp,function(data)
    		{
    		if(data)
    		{
    			
	    		//si los datos no son correctos mandamos error como respuesta
                //a ajax,´así sabe que no ha sido correcto el login
	    		if(data.msg === "error")
	    		{
	    			res.send("error", 200);
	    		}
                //en otro caso creamos la sesión y mandamos logueado,
                //con lo que ajax redirigira a la home al usuario con 
                //la sesión iniciada 
	    		else
	    		{
	    			
	    			res.render('eval',{
					title:'Evaluacion',
					materias:data

					});
    			

	    		}
	    		}
	    		else
	    		{
	    			res.send("error", 200);
	   	 		}
    		});
			
			}	
		}
	})
	
	});

app.post("/procesar",function(req,res){
		if(!req.session.idAlum)
		{
			res.redirect("/");
		}

		var	 radio1 = req.body.radio1;
		var	 radio2 = req.body.radio2;
		var	 radio3 = req.body.radio3;
		var	 radio4 = req.body.radio4;
		var	 radio5 = req.body.radio5;
		var	 radio6 = req.body.radio6;
		var	 radio7 = req.body.radio7;
		var	 radio8 = req.body.radio8;
		var	 radio9 = req.body.radio9;
		var radio10 = req.body.radio10;
		var radio11 = req.body.radio11;
		var radio12 = req.body.radio12;
		var radio13 = req.body.radio13;
		var radio14 = req.body.radio14;
		var radio15 = req.body.radio15;
		var radio16 = req.body.radio16;
		var radio17 = req.body.radio17;
		var radio18 = req.body.radio18;
		var radio19 = req.body.radio19;
		var radio20 = req.body.radio20;
		var radio21 = req.body.radio21;
		var radio22 = req.body.radio22;
		var radio23 = req.body.radio23;
		var radio24 = req.body.radio24;
		var radio25 = req.body.radio25;
		var radio26 = req.body.radio26;
		var radio27 = req.body.radio27;
		var radio28 = req.body.radio28;
		var radio29 = req.body.radio29;
		var radio30 = req.body.radio30;
		var idmat = req.body.idmat;
		var idemp = req.body.idemp;

		var userData={
			id:null,
			idmat:idmat,
			idemp:idemp,
			preg1:radio1,
			preg2:radio2,
			preg3:radio3,
			preg4:radio4,
			preg5:radio5,
			preg6:radio6,
			preg7:radio7,
			preg8:radio8,
			preg9:radio9,
			preg10:radio10,
			preg11:radio11,
			preg12:radio12,
			preg13:radio13,
			preg14:radio14,
			preg15:radio15,
			preg16:radio16,
			preg17:radio17,
			preg18:radio18,
			preg19:radio19,
			preg20:radio20,
			preg21:radio21,
			preg22:radio22,
			preg23:radio23,
			preg24:radio24,
			preg25:radio25,
			preg26:radio26,
			preg27:radio27,
			preg28:radio28,
			preg29:radio29,
			preg30:radio30,
			idalum:req.session.idAlum

		}

		homeModel.insertInfo(userData,function(data){
			if(data){
				if(data.msg=="error"){
					res.send("error",200);
				}
				else{
					res.send("correcto",200);
				}
			}
			else {
				res.send("error",200);
			}


		})
		
});


app.get("/logout",function(req,res){
	req.session.destroy();
	res.redirect("/");
});