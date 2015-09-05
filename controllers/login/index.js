var express =require('express');
var loginModel=require('../../models/login');
var app =module.exports=express();

app.set('views', __dirname+'/views');

app.get('/', function(request, response){

	if(request.session.username)
	{
		response.redirect("/home");
	}

	response.render('login',{
		title:'Inicio de Sesion'
	});
});

app.post("/login", function(req,res)
    {
    	loginModel.getUsers(req.body.username,req.body.password, function(data)
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

	    			req.session.username = req.body.username;
	    			req.session.idAlum = data[0].alu_codper;
	    			res.send("logueado", 200);
	    		}
	    	}
	    	else
	    	{
	    		res.send("error", 200);
	    	}
    	});
    });


