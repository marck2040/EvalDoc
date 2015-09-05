var express =require('express');
var loginModel=require('../../models/login_dec');
var app =module.exports=express();

app.set('views', __dirname+'/views');

app.get('/dec', function(request, response){

	if(request.session.user_dec)
	{
		response.redirect("/homeDe");
	}

	response.render('login_dec',{
		title:'Inicio de Sesion'
	});
});

app.post("/loginde", function(req,res)
    {
    	loginDeModel.getUsers(req.body.username,req.body.password, function(data)
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

	    			req.session.user_dec = req.body.username;
	    			req.session.fac = data[0].fac;
	    			res.send("logueado", 200);
	    		}
	    	}
	    	else
	    	{
	    		res.send("error", 200);
	    	}
    	});
    });


